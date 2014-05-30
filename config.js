var config = {
	"services": {
		"basemap":"https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",
		"cities" :"https://services.arcgis.com/6DIQcwlPy8knb6sg/arcgis/rest/services/HeatIndex_WM_5_consv/FeatureServer/0"
	},
	"baselineYear":"2010",
	"fieldDescriptions": [
	 	{"field" : "AvgSummer_HI", "descShort": "Avg summer heat index", "descLong" : "Average summertime heat index"},
	 	{"field" : "AvgSummerNight_HI", "descShort" : "Avg summer night heat index", "descLong" : "Average summer nighttime heat index"},
	 	{"field" : "AvgSummer_Temp", "descShort" : "Avg summer max temp", "descLong" : "Average summertime maximum temperature"},
	 	{"field" : "AvgSummer_RH", "descShort" : "Avg summer min RH", "descLong" : "Average summertime minimum relative humidity"},
	 	{"field" : "HtIdxCaut", "descShort": "Caution days",  "descLong" : "Number of 'caution' days"},
	 	{"field" : "HtIdxECaut", "descShort": "Extreme caution days", "descLong" : "Number of 'extreme caution' days"},
	 	{"field" : "HtIdxDanger", "descShort": "Danger days", "descLong" : "Number of 'danger' days"},
	 	{"field" : "HtIdxEDanger", "descShort": "Extreme danger days", "descLong" : "Number of 'extreme danger' days"},
	 	{"field" : "ConsecHtIdxCaut", "descShort": "Caution days in a row", "descLong" : "Max consecutive 'caution' days"},
	 	{"field" : "ConsecHtIdxECaut", "descShort": "Extreme caution days in a row", "descLong" : "Max consecutive 'extreme caution' days"},
	 	{"field" : "ConsecHtIdxDanger", "descShort": "Danger days in a row", "descLong" : "Max consecutive 'danger' days"},
	 	{"field" : "ConsecHtIdxEDanger", "descShort": "Extreme danger days in a row", "descLong" : "Max consecutive 'extreme danger' days"},
	 	{"field" : "TotalDaysGE103_Temp", "descShort" : "Days > 102F", "descLong" : "Number of days over 102 degrees Fahrenheit"},
	 	{"field" : "ConsecDaysGE103_Temp", "descShort": "Days > 102F in a row", "descLong" : "Max consecutive days over 102 degrees Fahrenheit"}
	],
	"fieldmap": [
	{"label"	: "2010",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp"}
	 ]},
	{"label"	: "2020",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_1"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_1"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_1"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_1"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_1"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_1"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_1"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_1"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_1"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_1"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_1"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_1"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_1"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_1"}
	 ]},
	{"label"	: "2030",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12"}
	 ]},
	{"label"	: "2040",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13"}
	 ]},
	{"label"	: "2050",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13_14"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13_14"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13_14"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13_14"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13_14"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13_14"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13_14"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13_14"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13_14"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13_14"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13_14"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13_14"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13_14"}
	 ]},
	{"label"	: "2060",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13_14_15"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13_14_15"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13_14_15"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13_14_15"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13_14_15"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13_14_15"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13_14_15"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13_14_15"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13_14_15"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13_14_15"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13_14_15"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13_14_15"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13_14_1"}
	 ]},
	{"label"	: "2070",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13_14_15_1"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13_14_15_1"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13_14_15_16"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13_14_15_16"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13_14_15_16"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13_14_15_16"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13_14_15_16"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13_14_15_16"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13_14_15_16"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13_14_15_1"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13_14_15_"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13_14_16"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13_14_2"}
	 ]},
	{"label"	: "2080",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16_17"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13_14_15_2"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13_14_15_2"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13_14_15_16_"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13_14_15_16_17"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13_14_15_16_17"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13_14_15_16_17"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13_14_15_16_17"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13_14_15_16_"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13_14_15_17"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13_14_15_2"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13_14_151"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13_14_17"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13_14_3"}
	 ]},
	{"label"	: "2090",
	 "fields"	: [
	 	{"field" : "AvgSummer_HI", "fieldname" : "AvgSummer_HI_12_13_14_15_16_17_"},
	 	{"field" : "AvgSummerNight_HI", "fieldname" : "AvgSummerNight_HI_12_13_14_15_3"},
	 	{"field" : "AvgSummer_Temp", "fieldname" : "AvgSummer_MaxTemp_12_13_14_15_3"},
	 	{"field" : "AvgSummer_RH", "fieldname" : "AvgSummer_MinRH_12_13_14_15_161"},
	 	{"field" : "HtIdxCaut", "fieldname" : "HtIdxCaut_12_13_14_15_16_17_18"},
	 	{"field" : "HtIdxECaut", "fieldname" : "HtIdxECaut_12_13_14_15_16_17_18"},
	 	{"field" : "HtIdxDanger", "fieldname" : "HtIdxDanger_12_13_14_15_16_17_1"},
	 	{"field" : "HtIdxEDanger", "fieldname" : "HtIdxEDanger_12_13_14_15_16_17_"},
	 	{"field" : "ConsecHtIdxCaut", "fieldname" : "ConsecHtIdxCaut_12_13_14_15_161"},
	 	{"field" : "ConsecHtIdxECaut", "fieldname" : "ConsecHtIdxECaut_12_13_14_15_18"},
	 	{"field" : "ConsecHtIdxDanger", "fieldname" : "ConsecHtIdxDanger_12_13_14_15_3"},
	 	{"field" : "ConsecHtIdxEDanger", "fieldname" : "ConsecHtIdxEDanger_12_13_14_152"},
	 	{"field" : "TotalDaysGE103_Temp", "fieldname" : "TotalDaysGE103_Temp_12_13_14_18"},
	 	{"field" : "ConsecDaysGE103_Temp", "fieldname" : "ConsecDaysGE103_Temp_12_13_14_4"}
	 ]}
	]
};
