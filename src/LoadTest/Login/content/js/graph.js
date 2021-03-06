/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 781.0, "minX": 0.0, "maxY": 4380.0, "series": [{"data": [[0.0, 781.0], [0.1, 790.0], [0.2, 791.0], [0.3, 791.0], [0.4, 792.0], [0.5, 793.0], [0.6, 793.0], [0.7, 793.0], [0.8, 793.0], [0.9, 793.0], [1.0, 793.0], [1.1, 794.0], [1.2, 794.0], [1.3, 795.0], [1.4, 795.0], [1.5, 796.0], [1.6, 796.0], [1.7, 796.0], [1.8, 796.0], [1.9, 798.0], [2.0, 798.0], [2.1, 799.0], [2.2, 799.0], [2.3, 799.0], [2.4, 800.0], [2.5, 802.0], [2.6, 802.0], [2.7, 803.0], [2.8, 803.0], [2.9, 803.0], [3.0, 804.0], [3.1, 804.0], [3.2, 805.0], [3.3, 805.0], [3.4, 805.0], [3.5, 805.0], [3.6, 806.0], [3.7, 806.0], [3.8, 806.0], [3.9, 807.0], [4.0, 807.0], [4.1, 807.0], [4.2, 808.0], [4.3, 808.0], [4.4, 810.0], [4.5, 810.0], [4.6, 810.0], [4.7, 810.0], [4.8, 810.0], [4.9, 811.0], [5.0, 811.0], [5.1, 811.0], [5.2, 811.0], [5.3, 812.0], [5.4, 812.0], [5.5, 812.0], [5.6, 812.0], [5.7, 813.0], [5.8, 813.0], [5.9, 813.0], [6.0, 813.0], [6.1, 813.0], [6.2, 813.0], [6.3, 813.0], [6.4, 814.0], [6.5, 814.0], [6.6, 814.0], [6.7, 814.0], [6.8, 814.0], [6.9, 814.0], [7.0, 815.0], [7.1, 815.0], [7.2, 815.0], [7.3, 815.0], [7.4, 816.0], [7.5, 816.0], [7.6, 816.0], [7.7, 816.0], [7.8, 816.0], [7.9, 816.0], [8.0, 816.0], [8.1, 817.0], [8.2, 817.0], [8.3, 817.0], [8.4, 817.0], [8.5, 818.0], [8.6, 818.0], [8.7, 818.0], [8.8, 818.0], [8.9, 818.0], [9.0, 818.0], [9.1, 818.0], [9.2, 818.0], [9.3, 818.0], [9.4, 819.0], [9.5, 819.0], [9.6, 819.0], [9.7, 819.0], [9.8, 820.0], [9.9, 820.0], [10.0, 820.0], [10.1, 820.0], [10.2, 820.0], [10.3, 821.0], [10.4, 821.0], [10.5, 821.0], [10.6, 821.0], [10.7, 821.0], [10.8, 821.0], [10.9, 822.0], [11.0, 822.0], [11.1, 822.0], [11.2, 822.0], [11.3, 823.0], [11.4, 823.0], [11.5, 823.0], [11.6, 823.0], [11.7, 823.0], [11.8, 824.0], [11.9, 824.0], [12.0, 824.0], [12.1, 824.0], [12.2, 824.0], [12.3, 824.0], [12.4, 825.0], [12.5, 825.0], [12.6, 825.0], [12.7, 825.0], [12.8, 826.0], [12.9, 826.0], [13.0, 826.0], [13.1, 826.0], [13.2, 826.0], [13.3, 826.0], [13.4, 827.0], [13.5, 827.0], [13.6, 827.0], [13.7, 827.0], [13.8, 827.0], [13.9, 827.0], [14.0, 827.0], [14.1, 828.0], [14.2, 828.0], [14.3, 828.0], [14.4, 828.0], [14.5, 828.0], [14.6, 829.0], [14.7, 829.0], [14.8, 829.0], [14.9, 829.0], [15.0, 830.0], [15.1, 830.0], [15.2, 830.0], [15.3, 830.0], [15.4, 830.0], [15.5, 830.0], [15.6, 831.0], [15.7, 831.0], [15.8, 831.0], [15.9, 831.0], [16.0, 832.0], [16.1, 832.0], [16.2, 832.0], [16.3, 833.0], [16.4, 833.0], [16.5, 833.0], [16.6, 833.0], [16.7, 833.0], [16.8, 834.0], [16.9, 834.0], [17.0, 834.0], [17.1, 835.0], [17.2, 835.0], [17.3, 836.0], [17.4, 836.0], [17.5, 837.0], [17.6, 837.0], [17.7, 838.0], [17.8, 838.0], [17.9, 838.0], [18.0, 838.0], [18.1, 838.0], [18.2, 840.0], [18.3, 840.0], [18.4, 840.0], [18.5, 841.0], [18.6, 841.0], [18.7, 841.0], [18.8, 841.0], [18.9, 841.0], [19.0, 842.0], [19.1, 842.0], [19.2, 842.0], [19.3, 842.0], [19.4, 843.0], [19.5, 843.0], [19.6, 844.0], [19.7, 845.0], [19.8, 846.0], [19.9, 846.0], [20.0, 847.0], [20.1, 847.0], [20.2, 847.0], [20.3, 849.0], [20.4, 849.0], [20.5, 851.0], [20.6, 854.0], [20.7, 854.0], [20.8, 855.0], [20.9, 856.0], [21.0, 857.0], [21.1, 859.0], [21.2, 861.0], [21.3, 863.0], [21.4, 864.0], [21.5, 868.0], [21.6, 882.0], [21.7, 902.0], [21.8, 904.0], [21.9, 908.0], [22.0, 919.0], [22.1, 926.0], [22.2, 971.0], [22.3, 987.0], [22.4, 997.0], [22.5, 1009.0], [22.6, 1030.0], [22.7, 1034.0], [22.8, 1131.0], [22.9, 1197.0], [23.0, 1316.0], [23.1, 1318.0], [23.2, 1318.0], [23.3, 1319.0], [23.4, 1319.0], [23.5, 1319.0], [23.6, 1320.0], [23.7, 1320.0], [23.8, 1320.0], [23.9, 1321.0], [24.0, 1321.0], [24.1, 1322.0], [24.2, 1322.0], [24.3, 1322.0], [24.4, 1322.0], [24.5, 1322.0], [24.6, 1322.0], [24.7, 1323.0], [24.8, 1323.0], [24.9, 1323.0], [25.0, 1323.0], [25.1, 1323.0], [25.2, 1324.0], [25.3, 1324.0], [25.4, 1324.0], [25.5, 1324.0], [25.6, 1325.0], [25.7, 1325.0], [25.8, 1326.0], [25.9, 1326.0], [26.0, 1326.0], [26.1, 1326.0], [26.2, 1326.0], [26.3, 1327.0], [26.4, 1327.0], [26.5, 1327.0], [26.6, 1327.0], [26.7, 1327.0], [26.8, 1327.0], [26.9, 1328.0], [27.0, 1328.0], [27.1, 1329.0], [27.2, 1329.0], [27.3, 1329.0], [27.4, 1330.0], [27.5, 1330.0], [27.6, 1330.0], [27.7, 1331.0], [27.8, 1331.0], [27.9, 1332.0], [28.0, 1332.0], [28.1, 1332.0], [28.2, 1332.0], [28.3, 1332.0], [28.4, 1332.0], [28.5, 1332.0], [28.6, 1332.0], [28.7, 1332.0], [28.8, 1333.0], [28.9, 1333.0], [29.0, 1333.0], [29.1, 1334.0], [29.2, 1334.0], [29.3, 1334.0], [29.4, 1334.0], [29.5, 1334.0], [29.6, 1334.0], [29.7, 1334.0], [29.8, 1334.0], [29.9, 1334.0], [30.0, 1334.0], [30.1, 1335.0], [30.2, 1335.0], [30.3, 1335.0], [30.4, 1335.0], [30.5, 1335.0], [30.6, 1335.0], [30.7, 1335.0], [30.8, 1335.0], [30.9, 1335.0], [31.0, 1336.0], [31.1, 1336.0], [31.2, 1336.0], [31.3, 1336.0], [31.4, 1337.0], [31.5, 1337.0], [31.6, 1337.0], [31.7, 1337.0], [31.8, 1337.0], [31.9, 1337.0], [32.0, 1337.0], [32.1, 1337.0], [32.2, 1337.0], [32.3, 1337.0], [32.4, 1337.0], [32.5, 1337.0], [32.6, 1338.0], [32.7, 1338.0], [32.8, 1338.0], [32.9, 1338.0], [33.0, 1338.0], [33.1, 1338.0], [33.2, 1338.0], [33.3, 1338.0], [33.4, 1339.0], [33.5, 1339.0], [33.6, 1339.0], [33.7, 1339.0], [33.8, 1340.0], [33.9, 1340.0], [34.0, 1340.0], [34.1, 1340.0], [34.2, 1340.0], [34.3, 1340.0], [34.4, 1341.0], [34.5, 1341.0], [34.6, 1341.0], [34.7, 1341.0], [34.8, 1341.0], [34.9, 1341.0], [35.0, 1341.0], [35.1, 1342.0], [35.2, 1342.0], [35.3, 1342.0], [35.4, 1342.0], [35.5, 1342.0], [35.6, 1342.0], [35.7, 1342.0], [35.8, 1342.0], [35.9, 1343.0], [36.0, 1343.0], [36.1, 1343.0], [36.2, 1343.0], [36.3, 1343.0], [36.4, 1344.0], [36.5, 1344.0], [36.6, 1344.0], [36.7, 1344.0], [36.8, 1344.0], [36.9, 1344.0], [37.0, 1344.0], [37.1, 1344.0], [37.2, 1344.0], [37.3, 1345.0], [37.4, 1345.0], [37.5, 1345.0], [37.6, 1345.0], [37.7, 1345.0], [37.8, 1345.0], [37.9, 1345.0], [38.0, 1345.0], [38.1, 1345.0], [38.2, 1345.0], [38.3, 1345.0], [38.4, 1345.0], [38.5, 1345.0], [38.6, 1346.0], [38.7, 1346.0], [38.8, 1346.0], [38.9, 1346.0], [39.0, 1346.0], [39.1, 1346.0], [39.2, 1346.0], [39.3, 1346.0], [39.4, 1346.0], [39.5, 1346.0], [39.6, 1346.0], [39.7, 1346.0], [39.8, 1346.0], [39.9, 1347.0], [40.0, 1347.0], [40.1, 1347.0], [40.2, 1347.0], [40.3, 1347.0], [40.4, 1347.0], [40.5, 1347.0], [40.6, 1347.0], [40.7, 1347.0], [40.8, 1347.0], [40.9, 1347.0], [41.0, 1347.0], [41.1, 1348.0], [41.2, 1348.0], [41.3, 1348.0], [41.4, 1348.0], [41.5, 1348.0], [41.6, 1348.0], [41.7, 1348.0], [41.8, 1348.0], [41.9, 1348.0], [42.0, 1348.0], [42.1, 1348.0], [42.2, 1348.0], [42.3, 1349.0], [42.4, 1349.0], [42.5, 1349.0], [42.6, 1350.0], [42.7, 1350.0], [42.8, 1350.0], [42.9, 1350.0], [43.0, 1350.0], [43.1, 1350.0], [43.2, 1350.0], [43.3, 1350.0], [43.4, 1350.0], [43.5, 1351.0], [43.6, 1351.0], [43.7, 1351.0], [43.8, 1351.0], [43.9, 1351.0], [44.0, 1351.0], [44.1, 1351.0], [44.2, 1351.0], [44.3, 1351.0], [44.4, 1351.0], [44.5, 1351.0], [44.6, 1351.0], [44.7, 1351.0], [44.8, 1351.0], [44.9, 1351.0], [45.0, 1352.0], [45.1, 1352.0], [45.2, 1352.0], [45.3, 1352.0], [45.4, 1352.0], [45.5, 1352.0], [45.6, 1352.0], [45.7, 1352.0], [45.8, 1352.0], [45.9, 1352.0], [46.0, 1353.0], [46.1, 1353.0], [46.2, 1353.0], [46.3, 1353.0], [46.4, 1353.0], [46.5, 1353.0], [46.6, 1353.0], [46.7, 1353.0], [46.8, 1354.0], [46.9, 1354.0], [47.0, 1354.0], [47.1, 1354.0], [47.2, 1354.0], [47.3, 1354.0], [47.4, 1354.0], [47.5, 1355.0], [47.6, 1355.0], [47.7, 1355.0], [47.8, 1355.0], [47.9, 1355.0], [48.0, 1355.0], [48.1, 1355.0], [48.2, 1355.0], [48.3, 1355.0], [48.4, 1355.0], [48.5, 1355.0], [48.6, 1355.0], [48.7, 1355.0], [48.8, 1356.0], [48.9, 1356.0], [49.0, 1356.0], [49.1, 1356.0], [49.2, 1356.0], [49.3, 1356.0], [49.4, 1356.0], [49.5, 1356.0], [49.6, 1357.0], [49.7, 1357.0], [49.8, 1357.0], [49.9, 1357.0], [50.0, 1357.0], [50.1, 1357.0], [50.2, 1357.0], [50.3, 1357.0], [50.4, 1357.0], [50.5, 1357.0], [50.6, 1357.0], [50.7, 1357.0], [50.8, 1357.0], [50.9, 1357.0], [51.0, 1357.0], [51.1, 1357.0], [51.2, 1357.0], [51.3, 1357.0], [51.4, 1358.0], [51.5, 1358.0], [51.6, 1358.0], [51.7, 1358.0], [51.8, 1358.0], [51.9, 1358.0], [52.0, 1358.0], [52.1, 1358.0], [52.2, 1359.0], [52.3, 1359.0], [52.4, 1359.0], [52.5, 1359.0], [52.6, 1359.0], [52.7, 1359.0], [52.8, 1359.0], [52.9, 1359.0], [53.0, 1359.0], [53.1, 1359.0], [53.2, 1359.0], [53.3, 1359.0], [53.4, 1359.0], [53.5, 1359.0], [53.6, 1359.0], [53.7, 1359.0], [53.8, 1359.0], [53.9, 1360.0], [54.0, 1360.0], [54.1, 1360.0], [54.2, 1360.0], [54.3, 1360.0], [54.4, 1360.0], [54.5, 1360.0], [54.6, 1360.0], [54.7, 1361.0], [54.8, 1361.0], [54.9, 1361.0], [55.0, 1361.0], [55.1, 1361.0], [55.2, 1361.0], [55.3, 1361.0], [55.4, 1361.0], [55.5, 1361.0], [55.6, 1361.0], [55.7, 1361.0], [55.8, 1361.0], [55.9, 1361.0], [56.0, 1361.0], [56.1, 1361.0], [56.2, 1361.0], [56.3, 1362.0], [56.4, 1362.0], [56.5, 1362.0], [56.6, 1362.0], [56.7, 1362.0], [56.8, 1362.0], [56.9, 1362.0], [57.0, 1362.0], [57.1, 1362.0], [57.2, 1362.0], [57.3, 1362.0], [57.4, 1363.0], [57.5, 1363.0], [57.6, 1363.0], [57.7, 1363.0], [57.8, 1363.0], [57.9, 1363.0], [58.0, 1363.0], [58.1, 1363.0], [58.2, 1363.0], [58.3, 1363.0], [58.4, 1363.0], [58.5, 1363.0], [58.6, 1363.0], [58.7, 1363.0], [58.8, 1363.0], [58.9, 1363.0], [59.0, 1364.0], [59.1, 1364.0], [59.2, 1364.0], [59.3, 1364.0], [59.4, 1364.0], [59.5, 1364.0], [59.6, 1364.0], [59.7, 1364.0], [59.8, 1364.0], [59.9, 1364.0], [60.0, 1364.0], [60.1, 1364.0], [60.2, 1364.0], [60.3, 1364.0], [60.4, 1364.0], [60.5, 1364.0], [60.6, 1365.0], [60.7, 1365.0], [60.8, 1365.0], [60.9, 1365.0], [61.0, 1365.0], [61.1, 1365.0], [61.2, 1365.0], [61.3, 1365.0], [61.4, 1365.0], [61.5, 1365.0], [61.6, 1365.0], [61.7, 1365.0], [61.8, 1365.0], [61.9, 1365.0], [62.0, 1366.0], [62.1, 1366.0], [62.2, 1366.0], [62.3, 1366.0], [62.4, 1366.0], [62.5, 1366.0], [62.6, 1366.0], [62.7, 1366.0], [62.8, 1366.0], [62.9, 1366.0], [63.0, 1366.0], [63.1, 1366.0], [63.2, 1367.0], [63.3, 1367.0], [63.4, 1367.0], [63.5, 1367.0], [63.6, 1367.0], [63.7, 1367.0], [63.8, 1367.0], [63.9, 1367.0], [64.0, 1367.0], [64.1, 1367.0], [64.2, 1368.0], [64.3, 1368.0], [64.4, 1368.0], [64.5, 1368.0], [64.6, 1368.0], [64.7, 1368.0], [64.8, 1368.0], [64.9, 1369.0], [65.0, 1369.0], [65.1, 1369.0], [65.2, 1369.0], [65.3, 1369.0], [65.4, 1369.0], [65.5, 1369.0], [65.6, 1369.0], [65.7, 1369.0], [65.8, 1370.0], [65.9, 1370.0], [66.0, 1370.0], [66.1, 1370.0], [66.2, 1370.0], [66.3, 1370.0], [66.4, 1370.0], [66.5, 1370.0], [66.6, 1371.0], [66.7, 1371.0], [66.8, 1371.0], [66.9, 1371.0], [67.0, 1371.0], [67.1, 1371.0], [67.2, 1371.0], [67.3, 1371.0], [67.4, 1371.0], [67.5, 1371.0], [67.6, 1372.0], [67.7, 1372.0], [67.8, 1372.0], [67.9, 1372.0], [68.0, 1372.0], [68.1, 1372.0], [68.2, 1372.0], [68.3, 1372.0], [68.4, 1372.0], [68.5, 1372.0], [68.6, 1372.0], [68.7, 1373.0], [68.8, 1373.0], [68.9, 1373.0], [69.0, 1373.0], [69.1, 1373.0], [69.2, 1374.0], [69.3, 1374.0], [69.4, 1374.0], [69.5, 1374.0], [69.6, 1374.0], [69.7, 1374.0], [69.8, 1374.0], [69.9, 1374.0], [70.0, 1374.0], [70.1, 1374.0], [70.2, 1374.0], [70.3, 1374.0], [70.4, 1375.0], [70.5, 1375.0], [70.6, 1375.0], [70.7, 1375.0], [70.8, 1375.0], [70.9, 1375.0], [71.0, 1375.0], [71.1, 1375.0], [71.2, 1375.0], [71.3, 1375.0], [71.4, 1375.0], [71.5, 1376.0], [71.6, 1376.0], [71.7, 1376.0], [71.8, 1376.0], [71.9, 1376.0], [72.0, 1376.0], [72.1, 1376.0], [72.2, 1376.0], [72.3, 1377.0], [72.4, 1377.0], [72.5, 1377.0], [72.6, 1377.0], [72.7, 1377.0], [72.8, 1377.0], [72.9, 1377.0], [73.0, 1377.0], [73.1, 1377.0], [73.2, 1378.0], [73.3, 1378.0], [73.4, 1379.0], [73.5, 1379.0], [73.6, 1379.0], [73.7, 1379.0], [73.8, 1379.0], [73.9, 1379.0], [74.0, 1379.0], [74.1, 1380.0], [74.2, 1380.0], [74.3, 1380.0], [74.4, 1380.0], [74.5, 1380.0], [74.6, 1380.0], [74.7, 1381.0], [74.8, 1381.0], [74.9, 1381.0], [75.0, 1381.0], [75.1, 1381.0], [75.2, 1381.0], [75.3, 1381.0], [75.4, 1381.0], [75.5, 1381.0], [75.6, 1381.0], [75.7, 1382.0], [75.8, 1382.0], [75.9, 1382.0], [76.0, 1382.0], [76.1, 1382.0], [76.2, 1382.0], [76.3, 1382.0], [76.4, 1383.0], [76.5, 1383.0], [76.6, 1383.0], [76.7, 1383.0], [76.8, 1383.0], [76.9, 1383.0], [77.0, 1383.0], [77.1, 1383.0], [77.2, 1383.0], [77.3, 1383.0], [77.4, 1384.0], [77.5, 1384.0], [77.6, 1385.0], [77.7, 1385.0], [77.8, 1385.0], [77.9, 1385.0], [78.0, 1385.0], [78.1, 1385.0], [78.2, 1385.0], [78.3, 1385.0], [78.4, 1385.0], [78.5, 1385.0], [78.6, 1386.0], [78.7, 1386.0], [78.8, 1386.0], [78.9, 1386.0], [79.0, 1386.0], [79.1, 1386.0], [79.2, 1386.0], [79.3, 1386.0], [79.4, 1386.0], [79.5, 1387.0], [79.6, 1387.0], [79.7, 1387.0], [79.8, 1387.0], [79.9, 1387.0], [80.0, 1387.0], [80.1, 1387.0], [80.2, 1387.0], [80.3, 1388.0], [80.4, 1388.0], [80.5, 1388.0], [80.6, 1388.0], [80.7, 1389.0], [80.8, 1389.0], [80.9, 1389.0], [81.0, 1390.0], [81.1, 1390.0], [81.2, 1390.0], [81.3, 1390.0], [81.4, 1390.0], [81.5, 1390.0], [81.6, 1390.0], [81.7, 1390.0], [81.8, 1390.0], [81.9, 1391.0], [82.0, 1391.0], [82.1, 1391.0], [82.2, 1392.0], [82.3, 1392.0], [82.4, 1392.0], [82.5, 1392.0], [82.6, 1392.0], [82.7, 1393.0], [82.8, 1393.0], [82.9, 1393.0], [83.0, 1393.0], [83.1, 1393.0], [83.2, 1393.0], [83.3, 1394.0], [83.4, 1394.0], [83.5, 1394.0], [83.6, 1394.0], [83.7, 1394.0], [83.8, 1394.0], [83.9, 1394.0], [84.0, 1394.0], [84.1, 1394.0], [84.2, 1394.0], [84.3, 1394.0], [84.4, 1395.0], [84.5, 1395.0], [84.6, 1395.0], [84.7, 1395.0], [84.8, 1395.0], [84.9, 1395.0], [85.0, 1395.0], [85.1, 1395.0], [85.2, 1395.0], [85.3, 1396.0], [85.4, 1396.0], [85.5, 1396.0], [85.6, 1396.0], [85.7, 1396.0], [85.8, 1397.0], [85.9, 1397.0], [86.0, 1397.0], [86.1, 1397.0], [86.2, 1397.0], [86.3, 1397.0], [86.4, 1397.0], [86.5, 1397.0], [86.6, 1397.0], [86.7, 1398.0], [86.8, 1398.0], [86.9, 1399.0], [87.0, 1399.0], [87.1, 1399.0], [87.2, 1400.0], [87.3, 1400.0], [87.4, 1400.0], [87.5, 1400.0], [87.6, 1400.0], [87.7, 1400.0], [87.8, 1401.0], [87.9, 1401.0], [88.0, 1403.0], [88.1, 1404.0], [88.2, 1404.0], [88.3, 1404.0], [88.4, 1405.0], [88.5, 1405.0], [88.6, 1405.0], [88.7, 1406.0], [88.8, 1406.0], [88.9, 1406.0], [89.0, 1406.0], [89.1, 1407.0], [89.2, 1408.0], [89.3, 1408.0], [89.4, 1410.0], [89.5, 1411.0], [89.6, 1412.0], [89.7, 1412.0], [89.8, 1412.0], [89.9, 1412.0], [90.0, 1413.0], [90.1, 1413.0], [90.2, 1413.0], [90.3, 1413.0], [90.4, 1414.0], [90.5, 1415.0], [90.6, 1415.0], [90.7, 1416.0], [90.8, 1416.0], [90.9, 1416.0], [91.0, 1417.0], [91.1, 1418.0], [91.2, 1418.0], [91.3, 1418.0], [91.4, 1424.0], [91.5, 1424.0], [91.6, 1424.0], [91.7, 1425.0], [91.8, 1425.0], [91.9, 1428.0], [92.0, 1429.0], [92.1, 1431.0], [92.2, 1439.0], [92.3, 1441.0], [92.4, 1442.0], [92.5, 1444.0], [92.6, 1445.0], [92.7, 1448.0], [92.8, 1453.0], [92.9, 1453.0], [93.0, 1458.0], [93.1, 1463.0], [93.2, 1464.0], [93.3, 1465.0], [93.4, 1466.0], [93.5, 1467.0], [93.6, 1487.0], [93.7, 1489.0], [93.8, 1499.0], [93.9, 1501.0], [94.0, 1506.0], [94.1, 1536.0], [94.2, 1562.0], [94.3, 1569.0], [94.4, 1583.0], [94.5, 1626.0], [94.6, 1634.0], [94.7, 1636.0], [94.8, 1648.0], [94.9, 1722.0], [95.0, 1778.0], [95.1, 1814.0], [95.2, 1827.0], [95.3, 1838.0], [95.4, 1859.0], [95.5, 1878.0], [95.6, 1898.0], [95.7, 1898.0], [95.8, 1913.0], [95.9, 1927.0], [96.0, 1933.0], [96.1, 1965.0], [96.2, 2055.0], [96.3, 2081.0], [96.4, 2096.0], [96.5, 2128.0], [96.6, 2146.0], [96.7, 2167.0], [96.8, 2167.0], [96.9, 2172.0], [97.0, 2173.0], [97.1, 2185.0], [97.2, 2195.0], [97.3, 2201.0], [97.4, 2212.0], [97.5, 2218.0], [97.6, 2218.0], [97.7, 2261.0], [97.8, 2278.0], [97.9, 2328.0], [98.0, 2330.0], [98.1, 2353.0], [98.2, 2355.0], [98.3, 2355.0], [98.4, 2356.0], [98.5, 2359.0], [98.6, 2367.0], [98.7, 2372.0], [98.8, 2386.0], [98.9, 2402.0], [99.0, 2405.0], [99.1, 2413.0], [99.2, 2429.0], [99.3, 2437.0], [99.4, 2447.0], [99.5, 2465.0], [99.6, 2485.0], [99.7, 2918.0], [99.8, 3074.0], [99.9, 4380.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 642.0, "series": [{"data": [[2100.0, 8.0], [2200.0, 6.0], [2300.0, 10.0], [2400.0, 8.0], [700.0, 23.0], [2900.0, 1.0], [3000.0, 1.0], [800.0, 193.0], [900.0, 8.0], [1000.0, 3.0], [4300.0, 1.0], [1100.0, 2.0], [1300.0, 642.0], [1400.0, 68.0], [1500.0, 6.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 7.0], [1900.0, 4.0], [2000.0, 3.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 61.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 939.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 939.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 61.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6440677966101693, "minX": 1.62360474E12, "maxY": 2.033333333333333, "series": [{"data": [[1.62360528E12, 1.7], [1.62360498E12, 1.8305084745762712], [1.62360564E12, 1.6440677966101693], [1.62360534E12, 1.8166666666666667], [1.62360504E12, 1.9836065573770496], [1.6236057E12, 1.8333333333333328], [1.62360474E12, 1.846153846153846], [1.6236054E12, 1.7377049180327868], [1.6236051E12, 1.7966101694915253], [1.62360576E12, 1.7777777777777772], [1.6236048E12, 2.033333333333333], [1.62360546E12, 1.7457627118644063], [1.62360516E12, 1.9166666666666674], [1.62360486E12, 1.8360655737704916], [1.62360552E12, 1.8666666666666665], [1.62360522E12, 1.7833333333333332], [1.62360492E12, 1.7666666666666666], [1.62360558E12, 1.7704918032786883]], "isOverall": false, "label": "Sharp Games", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360576E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 843.296803652969, "minX": 1.0, "maxY": 1935.514285714286, "series": [{"data": [[2.0, 1392.4477211796245], [1.0, 843.296803652969], [3.0, 1935.514285714286]], "isOverall": false, "label": "Login", "isController": false}, {"data": [[1.8160000000000003, 1291.1909999999991]], "isOverall": false, "label": "Login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 47.88333333333333, "minX": 1.62360474E12, "maxY": 976.5, "series": [{"data": [[1.62360528E12, 959.8333333333334], [1.62360498E12, 944.6666666666666], [1.62360564E12, 944.0], [1.62360534E12, 960.3666666666667], [1.62360504E12, 975.1], [1.6236057E12, 959.5], [1.62360474E12, 207.93333333333334], [1.6236054E12, 976.3666666666667], [1.6236051E12, 944.7666666666667], [1.62360576E12, 431.4], [1.6236048E12, 959.5], [1.62360546E12, 944.2], [1.62360516E12, 959.5], [1.62360486E12, 975.4333333333333], [1.62360552E12, 960.2333333333333], [1.62360522E12, 960.2], [1.62360492E12, 959.2666666666667], [1.62360558E12, 976.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62360528E12, 221.0], [1.62360498E12, 217.31666666666666], [1.62360564E12, 217.31666666666666], [1.62360534E12, 221.0], [1.62360504E12, 224.68333333333334], [1.6236057E12, 221.0], [1.62360474E12, 47.88333333333333], [1.6236054E12, 224.68333333333334], [1.6236051E12, 217.31666666666666], [1.62360576E12, 99.45], [1.6236048E12, 221.0], [1.62360546E12, 217.31666666666666], [1.62360516E12, 221.0], [1.62360486E12, 224.68333333333334], [1.62360552E12, 221.0], [1.62360522E12, 221.0], [1.62360492E12, 221.0], [1.62360558E12, 224.68333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360576E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1171.2203389830513, "minX": 1.62360474E12, "maxY": 1435.344262295082, "series": [{"data": [[1.62360528E12, 1212.8833333333337], [1.62360498E12, 1331.1355932203387], [1.62360564E12, 1171.2203389830513], [1.62360534E12, 1278.65], [1.62360504E12, 1435.344262295082], [1.6236057E12, 1261.5666666666664], [1.62360474E12, 1302.9230769230771], [1.6236054E12, 1234.4098360655737], [1.6236051E12, 1323.9491525423728], [1.62360576E12, 1257.5555555555557], [1.6236048E12, 1431.2833333333335], [1.62360546E12, 1226.1864406779662], [1.62360516E12, 1385.8999999999994], [1.62360486E12, 1282.1639344262294], [1.62360552E12, 1332.9999999999998], [1.62360522E12, 1258.6666666666667], [1.62360492E12, 1266.1666666666672], [1.62360558E12, 1236.8524590163931]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360576E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1170.118644067797, "minX": 1.62360474E12, "maxY": 1434.8360655737704, "series": [{"data": [[1.62360528E12, 1211.5333333333333], [1.62360498E12, 1330.7796610169498], [1.62360564E12, 1170.118644067797], [1.62360534E12, 1277.783333333333], [1.62360504E12, 1434.8360655737704], [1.6236057E12, 1261.0333333333335], [1.62360474E12, 1301.8461538461538], [1.6236054E12, 1233.5245901639341], [1.6236051E12, 1323.0847457627117], [1.62360576E12, 1255.8148148148152], [1.6236048E12, 1430.616666666667], [1.62360546E12, 1225.457627118644], [1.62360516E12, 1385.283333333333], [1.62360486E12, 1281.3114754098358], [1.62360552E12, 1318.2833333333333], [1.62360522E12, 1258.0833333333333], [1.62360492E12, 1264.9666666666667], [1.62360558E12, 1236.311475409836]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360576E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 396.86440677966095, "minX": 1.62360474E12, "maxY": 524.7288135593219, "series": [{"data": [[1.62360528E12, 419.1833333333333], [1.62360498E12, 524.7288135593219], [1.62360564E12, 398.79661016949154], [1.62360534E12, 418.2666666666665], [1.62360504E12, 484.3606557377049], [1.6236057E12, 402.2666666666665], [1.62360474E12, 428.0769230769231], [1.6236054E12, 401.0491803278688], [1.6236051E12, 485.0677966101695], [1.62360576E12, 399.77777777777777], [1.6236048E12, 485.91666666666674], [1.62360546E12, 396.86440677966095], [1.62360516E12, 522.3333333333334], [1.62360486E12, 413.9016393442623], [1.62360552E12, 432.0666666666667], [1.62360522E12, 417.13333333333327], [1.62360492E12, 438.46666666666664], [1.62360558E12, 402.0819672131148]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360576E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 781.0, "minX": 1.62360474E12, "maxY": 4380.0, "series": [{"data": [[1.62360528E12, 2402.0], [1.62360498E12, 2372.0], [1.62360564E12, 1413.0], [1.62360534E12, 1859.0], [1.62360504E12, 2485.0], [1.6236057E12, 1395.0], [1.62360474E12, 1636.0], [1.6236054E12, 1814.0], [1.6236051E12, 3074.0], [1.62360576E12, 1431.0], [1.6236048E12, 2918.0], [1.62360546E12, 1562.0], [1.62360516E12, 4380.0], [1.62360486E12, 2278.0], [1.62360552E12, 2355.0], [1.62360522E12, 2330.0], [1.62360492E12, 2386.0], [1.62360558E12, 1467.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62360528E12, 1403.7], [1.62360498E12, 1838.0], [1.62360564E12, 1381.0], [1.62360534E12, 1384.7], [1.62360504E12, 2142.4], [1.6236057E12, 1376.6], [1.62360474E12, 1538.8], [1.6236054E12, 1390.6000000000001], [1.6236051E12, 1898.0], [1.62360576E12, 1385.8], [1.6236048E12, 2183.8], [1.62360546E12, 1397.0], [1.62360516E12, 1441.9], [1.62360486E12, 1395.6], [1.62360552E12, 1573.3999999999999], [1.62360522E12, 1394.9], [1.62360492E12, 1415.1], [1.62360558E12, 1382.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62360528E12, 2402.0], [1.62360498E12, 2372.0], [1.62360564E12, 1413.0], [1.62360534E12, 1859.0], [1.62360504E12, 2485.0], [1.6236057E12, 1395.0], [1.62360474E12, 1636.0], [1.6236054E12, 1814.0], [1.6236051E12, 3074.0], [1.62360576E12, 1431.0], [1.6236048E12, 2918.0], [1.62360546E12, 1562.0], [1.62360516E12, 4380.0], [1.62360486E12, 2278.0], [1.62360552E12, 2355.0], [1.62360522E12, 2330.0], [1.62360492E12, 2386.0], [1.62360558E12, 1467.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62360528E12, 1428.25], [1.62360498E12, 2353.0], [1.62360564E12, 1397.0], [1.62360534E12, 1393.95], [1.62360504E12, 2356.3999999999996], [1.6236057E12, 1394.0], [1.62360474E12, 1636.0], [1.6236054E12, 1444.4], [1.6236051E12, 2355.0], [1.62360576E12, 1423.8], [1.6236048E12, 2211.45], [1.62360546E12, 1418.0], [1.62360516E12, 2446.5], [1.62360486E12, 1427.3], [1.62360552E12, 2155.299999999999], [1.62360522E12, 2049.849999999997], [1.62360492E12, 1619.7499999999995], [1.62360558E12, 1455.6999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62360528E12, 796.0], [1.62360498E12, 802.0], [1.62360564E12, 793.0], [1.62360534E12, 796.0], [1.62360504E12, 817.0], [1.6236057E12, 790.0], [1.62360474E12, 794.0], [1.6236054E12, 795.0], [1.6236051E12, 792.0], [1.62360576E12, 791.0], [1.6236048E12, 811.0], [1.62360546E12, 781.0], [1.62360516E12, 800.0], [1.62360486E12, 803.0], [1.62360552E12, 811.0], [1.62360522E12, 793.0], [1.62360492E12, 806.0], [1.62360558E12, 793.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62360528E12, 1347.5], [1.62360498E12, 1371.0], [1.62360564E12, 1339.0], [1.62360534E12, 1359.0], [1.62360504E12, 1385.0], [1.6236057E12, 1350.5], [1.62360474E12, 1370.0], [1.6236054E12, 1346.0], [1.6236051E12, 1373.0], [1.62360576E12, 1351.0], [1.6236048E12, 1360.0], [1.62360546E12, 1350.0], [1.62360516E12, 1364.5], [1.62360486E12, 1361.0], [1.62360552E12, 1354.0], [1.62360522E12, 1353.5], [1.62360492E12, 1360.0], [1.62360558E12, 1344.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1337.5, "minX": 1.0, "maxY": 1362.5, "series": [{"data": [[1.0, 1361.0], [2.0, 1337.5], [3.0, 1362.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1337.0, "minX": 1.0, "maxY": 1362.0, "series": [{"data": [[1.0, 1360.0], [2.0, 1337.0], [3.0, 1362.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.62360474E12, "maxY": 1.0, "series": [{"data": [[1.62360528E12, 1.0], [1.62360498E12, 1.0], [1.62360564E12, 1.0], [1.62360534E12, 1.0], [1.62360504E12, 1.0], [1.6236057E12, 1.0], [1.62360474E12, 0.23333333333333334], [1.6236054E12, 1.0], [1.6236051E12, 1.0], [1.62360576E12, 0.43333333333333335], [1.6236048E12, 1.0], [1.62360546E12, 1.0], [1.62360516E12, 1.0], [1.62360486E12, 1.0], [1.62360552E12, 1.0], [1.62360522E12, 1.0], [1.62360492E12, 1.0], [1.62360558E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360576E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.62360474E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360528E12, 1.0], [1.62360498E12, 0.9833333333333333], [1.62360564E12, 0.9833333333333333], [1.62360534E12, 1.0], [1.62360504E12, 1.0166666666666666], [1.6236057E12, 1.0], [1.62360474E12, 0.21666666666666667], [1.6236054E12, 1.0166666666666666], [1.6236051E12, 0.9833333333333333], [1.62360576E12, 0.45], [1.6236048E12, 1.0], [1.62360546E12, 0.9833333333333333], [1.62360516E12, 1.0], [1.62360486E12, 1.0166666666666666], [1.62360552E12, 1.0], [1.62360522E12, 1.0], [1.62360492E12, 1.0], [1.62360558E12, 1.0166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360576E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.62360474E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360528E12, 1.0], [1.62360498E12, 0.9833333333333333], [1.62360564E12, 0.9833333333333333], [1.62360534E12, 1.0], [1.62360504E12, 1.0166666666666666], [1.6236057E12, 1.0], [1.62360474E12, 0.21666666666666667], [1.6236054E12, 1.0166666666666666], [1.6236051E12, 0.9833333333333333], [1.62360576E12, 0.45], [1.6236048E12, 1.0], [1.62360546E12, 0.9833333333333333], [1.62360516E12, 1.0], [1.62360486E12, 1.0166666666666666], [1.62360552E12, 1.0], [1.62360522E12, 1.0], [1.62360492E12, 1.0], [1.62360558E12, 1.0166666666666666]], "isOverall": false, "label": "Login-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360576E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.62360474E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360528E12, 1.0], [1.62360498E12, 0.9833333333333333], [1.62360564E12, 0.9833333333333333], [1.62360534E12, 1.0], [1.62360504E12, 1.0166666666666666], [1.6236057E12, 1.0], [1.62360474E12, 0.21666666666666667], [1.6236054E12, 1.0166666666666666], [1.6236051E12, 0.9833333333333333], [1.62360576E12, 0.45], [1.6236048E12, 1.0], [1.62360546E12, 0.9833333333333333], [1.62360516E12, 1.0], [1.62360486E12, 1.0166666666666666], [1.62360552E12, 1.0], [1.62360522E12, 1.0], [1.62360492E12, 1.0], [1.62360558E12, 1.0166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360576E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

