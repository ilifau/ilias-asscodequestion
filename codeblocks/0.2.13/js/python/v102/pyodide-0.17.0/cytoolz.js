var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="cytoolz.data";var REMOTE_PACKAGE_BASE="cytoolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","cytoolz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/cytoolz","curried",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/cytoolz","tests",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","cytoolz-0.11.0-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:519221,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,881,1659,2912,4184,5575,6799,7895,8684,9849,11101,12377,13569,14568,15957,16999,18001,19038,20366,21450,22408,23393,24642,25930,26901,28263,29524,30454,31435,32751,33747,34768,36004,37166,38366,39612,40784,41855,42954,44200,45351,46527,47007,47946,48769,49526,50334,51618,52727,53943,55287,56602,57363,58119,58821,59990,61226,62034,63035,64182,65226,66489,67472,68127,69096,70258,70895,71433,72057,73097,74329,75549,76768,77963,79144,80315,81557,82777,84068,85415,86447,87647,88962,90366,91556,93012,93764,94270,95273,96466,97408,98791,99987,101134,102257,103350,104085,105086,106567,107799,109007,110192,111508,112682,113344,114520,115610,116655,117666,118981,119832,121139,122377,123021,123664,124288,125531,126740,127766,128782,129806,130927,132083,133401,133966,134704,135372,136217,137392,138092,138741,139505,140404,140988,141650,142229,142976,143934,145198,146361,147496,148664,149885,151230,152368,153027,153617,154226,155454,156680,157808,158863,159699,161109,162267,162975,163856,165072,165854,167054,168327,169597,170497,171538,172811,173921,175117,176183,177175,178444,179463,180293,181305,182332,183429,184574,185758,186765,188040,188804,189833,191069,192070,193263,194556,195672,196723,197892,198800,199754,200901,202260,203216,204292,205402,206436,207491,208098,209296,210539,211561,212972,214246,215639,216874,217648,218962,220310,221472,222877,224341,225598,226582,227648,228670,229801,230924,231957,232543,233457,234513,235680,237063,237184,238407,239665,240325,240973,241602,242220,242835,243449,244433,245727,246891,248052,249138,250158,251181,252201,253223,254377,255514,256656,257754,258889,260142,260936,261491,262192,262956,263635,264298,265297,265973,266714,267467,268062,268676,269228,269729,270273,270796,271328,271863,272381,272897,273636,274232,274711,275224,275738,276248,276808,277483,278183,278864,279790,280430,281106,281777,282547,283202,283952,284592,285148,286033,287110,288407,289644,290681,291912,292984,293977,294995,296084,297156,298216,299521,300570,301936,303011,304069,305230,306042,306846,307710,308865,310192,311345,312551,313714,315032,316133,317261,318375,319221,320540,321194,321819,323129,324140,325354,326401,327670,328921,330070,331262,332226,333563,334297,335310,336479,337438,338634,339179,340139,341259,342411,343657,344697,345661,346859,347916,349204,350327,351633,352812,353970,355235,356426,357693,358934,360300,361343,362609,363675,364440,364787,366133,367257,368512,369605,370685,371752,372776,373368,374329,375582,376785,377875,379153,380390,381587,383046,383809,385244,386261,387719,389182,390549,391926,393126,393790,394864,396238,397569,398782,400124,401277,402357,403233,404298,405075,406061,407094,407967,408794,409360,409743,410773,412099,413289,414357,415445,416265,416829,417247,417555,418269,418984,419596,420550,421635,422943,424223,425635,426871,427903,427928,428631,429945,430843,432022,433332,434356,435131,435799,436728,437884,439177,439760,440440,441477,442737,444101,445547,446915,448127,449243,450206,451291,452402,453802,454969,455933,457432,458734,459280,459951,461457,462610,463585,464598,465950,467137,468261,469109,470395,471526,472570,473653,474382,475340,476358,477594,478762,479949,481145,482196,483174,484337,485131,486261,487118,488210,489255,490310,491313,492246,492767,493339,494114,494906,495528,496707,497740,498768,499684,500546,501558,502505,503589,504424,505287,506523,507605,508310,509107,509766,510362,511261,512287,513023,513846,514439,515311,516663,517965,518963],sizes:[881,778,1253,1272,1391,1224,1096,789,1165,1252,1276,1192,999,1389,1042,1002,1037,1328,1084,958,985,1249,1288,971,1362,1261,930,981,1316,996,1021,1236,1162,1200,1246,1172,1071,1099,1246,1151,1176,480,939,823,757,808,1284,1109,1216,1344,1315,761,756,702,1169,1236,808,1001,1147,1044,1263,983,655,969,1162,637,538,624,1040,1232,1220,1219,1195,1181,1171,1242,1220,1291,1347,1032,1200,1315,1404,1190,1456,752,506,1003,1193,942,1383,1196,1147,1123,1093,735,1001,1481,1232,1208,1185,1316,1174,662,1176,1090,1045,1011,1315,851,1307,1238,644,643,624,1243,1209,1026,1016,1024,1121,1156,1318,565,738,668,845,1175,700,649,764,899,584,662,579,747,958,1264,1163,1135,1168,1221,1345,1138,659,590,609,1228,1226,1128,1055,836,1410,1158,708,881,1216,782,1200,1273,1270,900,1041,1273,1110,1196,1066,992,1269,1019,830,1012,1027,1097,1145,1184,1007,1275,764,1029,1236,1001,1193,1293,1116,1051,1169,908,954,1147,1359,956,1076,1110,1034,1055,607,1198,1243,1022,1411,1274,1393,1235,774,1314,1348,1162,1405,1464,1257,984,1066,1022,1131,1123,1033,586,914,1056,1167,1383,121,1223,1258,660,648,629,618,615,614,984,1294,1164,1161,1086,1020,1023,1020,1022,1154,1137,1142,1098,1135,1253,794,555,701,764,679,663,999,676,741,753,595,614,552,501,544,523,532,535,518,516,739,596,479,513,514,510,560,675,700,681,926,640,676,671,770,655,750,640,556,885,1077,1297,1237,1037,1231,1072,993,1018,1089,1072,1060,1305,1049,1366,1075,1058,1161,812,804,864,1155,1327,1153,1206,1163,1318,1101,1128,1114,846,1319,654,625,1310,1011,1214,1047,1269,1251,1149,1192,964,1337,734,1013,1169,959,1196,545,960,1120,1152,1246,1040,964,1198,1057,1288,1123,1306,1179,1158,1265,1191,1267,1241,1366,1043,1266,1066,765,347,1346,1124,1255,1093,1080,1067,1024,592,961,1253,1203,1090,1278,1237,1197,1459,763,1435,1017,1458,1463,1367,1377,1200,664,1074,1374,1331,1213,1342,1153,1080,876,1065,777,986,1033,873,827,566,383,1030,1326,1190,1068,1088,820,564,418,308,714,715,612,954,1085,1308,1280,1412,1236,1032,25,703,1314,898,1179,1310,1024,775,668,929,1156,1293,583,680,1037,1260,1364,1446,1368,1212,1116,963,1085,1111,1400,1167,964,1499,1302,546,671,1506,1153,975,1013,1352,1187,1124,848,1286,1131,1044,1083,729,958,1018,1236,1168,1187,1196,1051,978,1163,794,1130,857,1092,1045,1055,1003,933,521,572,775,792,622,1179,1033,1028,916,862,1012,947,1084,835,863,1236,1082,705,797,659,596,899,1026,736,823,593,872,1352,1302,998,258],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cytoolz.data")}Module["addRunDependency"]("datafile_cytoolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/cytoolz/__init__.py",start:0,end:471,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/_signatures.py",start:471,end:4827,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/_version.py",start:4827,end:4879,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/compatibility.py",start:4879,end:5862,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/utils_test.py",start:5862,end:7937,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/dicttoolz.pyx",start:7937,end:23481,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/functoolz.pyx",start:23481,end:48516,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/itertoolz.pyx",start:48516,end:99685,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/recipes.pyx",start:99685,end:101285,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/utils.pyx",start:101285,end:102638,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/__init__.pxd",start:102638,end:103388,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/cpython.pxd",start:103388,end:103885,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/dicttoolz.pxd",start:103885,end:105253,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/functoolz.pxd",start:105253,end:106505,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/itertoolz.pxd",start:106505,end:111200,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/recipes.pxd",start:111200,end:111300,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/utils.pxd",start:111300,end:111333,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/dicttoolz.so",start:111333,end:224585,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/functoolz.so",start:224585,end:456694,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/itertoolz.so",start:456694,end:859074,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/recipes.so",start:859074,end:899566,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/utils.so",start:899566,end:932487,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/curried/__init__.py",start:932487,end:935371,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/curried/exceptions.py",start:935371,end:935721,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/curried/operator.py",start:935721,end:936223,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/dev_skip_test.py",start:936223,end:937235,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_compatibility.py",start:937235,end:937264,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_curried.py",start:937264,end:940967,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_curried_toolzlike.py",start:940967,end:942366,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_dev_skip_test.py",start:942366,end:942746,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_dicttoolz.py",start:942746,end:951844,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_docstrings.py",start:951844,end:954878,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_doctests.py",start:954878,end:955313,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_embedded_sigs.py",start:955313,end:958808,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_functoolz.py",start:958808,end:979025,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_inspect_args.py",start:979025,end:995027,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_itertoolz.py",start:995027,end:1013192,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_none_safe.py",start:1013192,end:1025414,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_recipes.py",start:1025414,end:1026236,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_serialization.py",start:1026236,end:1032061,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_signatures.py",start:1032061,end:1034938,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_tlz.py",start:1034938,end:1036424,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz/tests/test_utils.py",start:1036424,end:1036809,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/PKG-INFO",start:1036809,end:1041630,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/SOURCES.txt",start:1041630,end:1042995,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/dependency_links.txt",start:1042995,end:1042996,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/not-zip-safe",start:1042996,end:1042997,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/requires.txt",start:1042997,end:1043027,audio:0},{filename:"/lib/python3.8/site-packages/cytoolz-0.11.0-py3.8.egg-info/top_level.txt",start:1043027,end:1043035,audio:0}],remote_package_size:523317,package_uuid:"9ffe4a6b-f21c-426e-b049-4d5b6cb0e891"})})();