var config = {
	"services": {
		"basemap":"http://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Dark_Gray_Base_Beta/MapServer",
		"cities" :"http://services.arcgis.com/6DIQcwlPy8knb6sg/arcgis/rest/services/HeatIndex_WM_4/FeatureServer/0"
	},
	"baselineYear":"2010",
	"fieldDescriptions": [
	 	{"field" : "AvgJJA_HI", "descShort": "Avg heat index Jun-Jul-Aug", "descLong" : "Average heat index June-July-August"},
	 	{"field" : "AvgSummer_HI", "descShort": "Avg summer heat index", "descLong" : "Average summertime heat index"},
	 	{"field" : "HtIdxCaut", "descShort": "Caution days",  "descLong" : "Number of 'caution' days"},
	 	{"field" : "HtIdxECaut", "descShort": "Extreme caution days", "descLong" : "Number of 'extreme caution' days"},
	 	{"field" : "HtIdxDanger", "descShort": "Danger days", "descLong" : "Number of 'danger' days"},
	 	{"field" : "HtIdxEDanger", "descShort": "Extreme danger days", "descLong" : "Number of 'extreme danger' days"},
	 	{"field" : "ConsecHtIdxCaut", "descShort": "Caution days in a row", "descLong" : "Max consecutive 'caution' days"},
	 	{"field" : "ConsecHtIdxECaut", "descShort": "Extreme caution days in a row", "descLong" : "Max consecutive 'extreme caution' days"},
	 	{"field" : "ConsecHtIdxDanger", "descShort": "Danger days in a row", "descLong" : "Max consecutive 'danger' days"},
	 	{"field" : "ConsecHtIdxEDanger", "descShort": "Extreme danger days in a row", "descLong" : "Max consecutive 'extreme danger' days"}
	],
	"fieldmap": [
	{"label"	: "2010",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2020",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_1"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2030",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2040",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2050",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2060",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2070",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2080",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16_17"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]},
	{"label"	: "2090",
	 "fields"	: [
	 	{"field" : "AvgJJA_HI", "fieldname" : "AvgJJA_HI"},
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16_17_"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"}
	 ]}
	]
};
