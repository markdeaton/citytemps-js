/* Do necessary, initial calculations about the polyline's paths and segments */
function initPolyline(graphic, graphicsLayer) {
  graphic.visible = false;
  graphicsLayer.add(graphic);
  // Make a record of the original, full geometry
  var pln = graphic.originalGeometry = graphic.geometry;
  // Get info about the various paths and their lengths
  var pathInfos = [];
  for ( var iPath = 0; iPath < pln.paths.length; iPath++ ) {
    var aryPath = pln.paths[ iPath ];
    var arySegmentsForPath = [];
    var nPathLen = 0;
    
    // Store each pair of points in the path, plus the distance between them
    for ( var iPathPt = 1; iPathPt < aryPath.length; iPathPt++ ) {
      var ptStart = new esri.geometry.Point( aryPath[ iPathPt - 1 ][ 0 ], aryPath[ iPathPt - 1 ][ 1 ], pln.spatialReference );
      var ptEnd = new esri.geometry.Point( aryPath[ iPathPt ][ 0 ], aryPath[ iPathPt ] [ 1 ], pln.spatialReference );
      
      // Figure out distance between start/end point using pythagorean theorem (this needs improvement)
      var nSegmentLen = Math.sqrt( Math.pow( ptEnd.x - ptStart.x, 2 ) + Math.pow( ptEnd.y - ptStart.y, 2 ) );
                
      arySegmentsForPath.push( {
        "startPoint"    : ptStart,
        "endPoint"      : ptEnd,
        "segmentLength" : nSegmentLen
      } );
      nPathLen += nSegmentLen;
    }
    
    pathInfos.push( {
      "segmentInfos"  : arySegmentsForPath,
      "pathLength"    : nPathLen
    } );
  }
  graphic.pathInfos = pathInfos;
}

/* Calculate the geometry for a given (initialized graphic) and a given percentage */
function percentOfPolyline( g, percent ) {
  var nFraction = percent / 100.0;
  var plGeom = new esri.geometry.Polyline( g.geometry.spatialReference );
  for ( var iPath = 0; iPath < g.pathInfos.length; iPath++ ) {
    var oPath = g.pathInfos[ iPath ];
    var nRequestedPathLen = oPath.pathLength * ( nFraction );
    var nCurrentPathLen = 0; // Length of path-being-constructed
    var aryPathPts = [];
    
    for ( var iSegment = 0; iSegment < oPath.segmentInfos.length; iSegment++ ) {
      var oSegment = oPath.segmentInfos[ iSegment ];
      
      var ptSegmentStart = oSegment.startPoint; 
      var ptSegmentEnd = oSegment.endPoint;
      var nCurrentSegmentLen = oSegment.segmentLength;
      
      if ( iSegment == 0 ) aryPathPts.push( oSegment.startPoint );

      // If this segment won't complete the requested percentage of the total path,
      // add the whole segment
      if ( nCurrentPathLen + nCurrentSegmentLen < nRequestedPathLen ) {
        aryPathPts.push( ptSegmentEnd );
        nCurrentPathLen += nCurrentSegmentLen;
      }
      // If this segment will complete or surpass the requested percentage of the total line,
      // it's the last segment; calculate the proper percentage to add
      else {
        var nPathLenStillNeeded =  nRequestedPathLen - nCurrentPathLen;
        var nPctOfThisPathNeeded = nPathLenStillNeeded / nCurrentSegmentLen;
        var nDeltaX = (ptSegmentEnd.x - ptSegmentStart.x) * nPctOfThisPathNeeded;
        var nDeltaY = (ptSegmentEnd.y - ptSegmentStart.y) * nPctOfThisPathNeeded;
        var ptNewEnd = new esri.geometry.Point(ptSegmentStart.x + nDeltaX, ptSegmentStart.y + nDeltaY, g.geometry.spatialReference);
        aryPathPts.push( ptNewEnd );
        
        // And exit the loop
        break;
      }
    }
    plGeom.addPath( aryPathPts );
  }
  
  return plGeom;
}
