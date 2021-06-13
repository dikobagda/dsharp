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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 2789.0, "series": [{"data": [[0.0, 9.0], [0.1, 785.0], [0.2, 786.0], [0.3, 786.0], [0.4, 787.0], [0.5, 787.0], [0.6, 787.0], [0.7, 789.0], [0.8, 790.0], [0.9, 790.0], [1.0, 790.0], [1.1, 790.0], [1.2, 790.0], [1.3, 791.0], [1.4, 791.0], [1.5, 792.0], [1.6, 792.0], [1.7, 792.0], [1.8, 793.0], [1.9, 793.0], [2.0, 794.0], [2.1, 794.0], [2.2, 794.0], [2.3, 794.0], [2.4, 794.0], [2.5, 795.0], [2.6, 798.0], [2.7, 798.0], [2.8, 798.0], [2.9, 799.0], [3.0, 799.0], [3.1, 799.0], [3.2, 801.0], [3.3, 801.0], [3.4, 801.0], [3.5, 802.0], [3.6, 802.0], [3.7, 802.0], [3.8, 802.0], [3.9, 803.0], [4.0, 804.0], [4.1, 804.0], [4.2, 804.0], [4.3, 804.0], [4.4, 804.0], [4.5, 804.0], [4.6, 804.0], [4.7, 805.0], [4.8, 806.0], [4.9, 806.0], [5.0, 806.0], [5.1, 806.0], [5.2, 807.0], [5.3, 808.0], [5.4, 808.0], [5.5, 808.0], [5.6, 808.0], [5.7, 809.0], [5.8, 809.0], [5.9, 809.0], [6.0, 810.0], [6.1, 810.0], [6.2, 811.0], [6.3, 811.0], [6.4, 811.0], [6.5, 811.0], [6.6, 811.0], [6.7, 811.0], [6.8, 812.0], [6.9, 812.0], [7.0, 812.0], [7.1, 812.0], [7.2, 812.0], [7.3, 812.0], [7.4, 812.0], [7.5, 812.0], [7.6, 812.0], [7.7, 812.0], [7.8, 812.0], [7.9, 813.0], [8.0, 813.0], [8.1, 813.0], [8.2, 813.0], [8.3, 813.0], [8.4, 813.0], [8.5, 813.0], [8.6, 814.0], [8.7, 814.0], [8.8, 814.0], [8.9, 814.0], [9.0, 814.0], [9.1, 814.0], [9.2, 814.0], [9.3, 814.0], [9.4, 815.0], [9.5, 815.0], [9.6, 815.0], [9.7, 815.0], [9.8, 815.0], [9.9, 816.0], [10.0, 816.0], [10.1, 816.0], [10.2, 816.0], [10.3, 816.0], [10.4, 816.0], [10.5, 817.0], [10.6, 817.0], [10.7, 817.0], [10.8, 817.0], [10.9, 817.0], [11.0, 817.0], [11.1, 817.0], [11.2, 817.0], [11.3, 817.0], [11.4, 817.0], [11.5, 818.0], [11.6, 818.0], [11.7, 818.0], [11.8, 818.0], [11.9, 818.0], [12.0, 819.0], [12.1, 819.0], [12.2, 819.0], [12.3, 819.0], [12.4, 819.0], [12.5, 820.0], [12.6, 820.0], [12.7, 820.0], [12.8, 820.0], [12.9, 820.0], [13.0, 820.0], [13.1, 820.0], [13.2, 820.0], [13.3, 821.0], [13.4, 821.0], [13.5, 821.0], [13.6, 821.0], [13.7, 821.0], [13.8, 822.0], [13.9, 822.0], [14.0, 822.0], [14.1, 822.0], [14.2, 822.0], [14.3, 822.0], [14.4, 822.0], [14.5, 822.0], [14.6, 822.0], [14.7, 822.0], [14.8, 823.0], [14.9, 823.0], [15.0, 824.0], [15.1, 824.0], [15.2, 824.0], [15.3, 824.0], [15.4, 824.0], [15.5, 825.0], [15.6, 825.0], [15.7, 826.0], [15.8, 826.0], [15.9, 827.0], [16.0, 827.0], [16.1, 827.0], [16.2, 827.0], [16.3, 828.0], [16.4, 828.0], [16.5, 828.0], [16.6, 828.0], [16.7, 828.0], [16.8, 828.0], [16.9, 828.0], [17.0, 829.0], [17.1, 829.0], [17.2, 829.0], [17.3, 829.0], [17.4, 830.0], [17.5, 830.0], [17.6, 831.0], [17.7, 831.0], [17.8, 831.0], [17.9, 831.0], [18.0, 832.0], [18.1, 832.0], [18.2, 833.0], [18.3, 833.0], [18.4, 833.0], [18.5, 833.0], [18.6, 833.0], [18.7, 834.0], [18.8, 834.0], [18.9, 834.0], [19.0, 834.0], [19.1, 835.0], [19.2, 835.0], [19.3, 835.0], [19.4, 836.0], [19.5, 837.0], [19.6, 839.0], [19.7, 839.0], [19.8, 839.0], [19.9, 839.0], [20.0, 839.0], [20.1, 840.0], [20.2, 840.0], [20.3, 841.0], [20.4, 841.0], [20.5, 842.0], [20.6, 844.0], [20.7, 844.0], [20.8, 844.0], [20.9, 845.0], [21.0, 846.0], [21.1, 847.0], [21.2, 847.0], [21.3, 848.0], [21.4, 852.0], [21.5, 856.0], [21.6, 857.0], [21.7, 857.0], [21.8, 859.0], [21.9, 861.0], [22.0, 863.0], [22.1, 875.0], [22.2, 880.0], [22.3, 896.0], [22.4, 900.0], [22.5, 918.0], [22.6, 928.0], [22.7, 944.0], [22.8, 1012.0], [22.9, 1074.0], [23.0, 1126.0], [23.1, 1150.0], [23.2, 1287.0], [23.3, 1304.0], [23.4, 1307.0], [23.5, 1308.0], [23.6, 1311.0], [23.7, 1311.0], [23.8, 1312.0], [23.9, 1313.0], [24.0, 1313.0], [24.1, 1314.0], [24.2, 1315.0], [24.3, 1315.0], [24.4, 1315.0], [24.5, 1316.0], [24.6, 1316.0], [24.7, 1316.0], [24.8, 1316.0], [24.9, 1316.0], [25.0, 1317.0], [25.1, 1317.0], [25.2, 1317.0], [25.3, 1317.0], [25.4, 1317.0], [25.5, 1318.0], [25.6, 1318.0], [25.7, 1318.0], [25.8, 1319.0], [25.9, 1319.0], [26.0, 1319.0], [26.1, 1319.0], [26.2, 1319.0], [26.3, 1320.0], [26.4, 1320.0], [26.5, 1321.0], [26.6, 1321.0], [26.7, 1321.0], [26.8, 1322.0], [26.9, 1322.0], [27.0, 1322.0], [27.1, 1323.0], [27.2, 1323.0], [27.3, 1323.0], [27.4, 1323.0], [27.5, 1323.0], [27.6, 1323.0], [27.7, 1324.0], [27.8, 1324.0], [27.9, 1324.0], [28.0, 1325.0], [28.1, 1325.0], [28.2, 1325.0], [28.3, 1325.0], [28.4, 1326.0], [28.5, 1326.0], [28.6, 1326.0], [28.7, 1326.0], [28.8, 1326.0], [28.9, 1326.0], [29.0, 1327.0], [29.1, 1327.0], [29.2, 1327.0], [29.3, 1327.0], [29.4, 1328.0], [29.5, 1328.0], [29.6, 1328.0], [29.7, 1328.0], [29.8, 1328.0], [29.9, 1328.0], [30.0, 1329.0], [30.1, 1329.0], [30.2, 1329.0], [30.3, 1330.0], [30.4, 1330.0], [30.5, 1330.0], [30.6, 1331.0], [30.7, 1331.0], [30.8, 1331.0], [30.9, 1331.0], [31.0, 1331.0], [31.1, 1331.0], [31.2, 1331.0], [31.3, 1331.0], [31.4, 1331.0], [31.5, 1331.0], [31.6, 1332.0], [31.7, 1332.0], [31.8, 1332.0], [31.9, 1332.0], [32.0, 1332.0], [32.1, 1332.0], [32.2, 1332.0], [32.3, 1332.0], [32.4, 1333.0], [32.5, 1333.0], [32.6, 1333.0], [32.7, 1333.0], [32.8, 1333.0], [32.9, 1333.0], [33.0, 1333.0], [33.1, 1333.0], [33.2, 1333.0], [33.3, 1334.0], [33.4, 1334.0], [33.5, 1334.0], [33.6, 1334.0], [33.7, 1334.0], [33.8, 1335.0], [33.9, 1335.0], [34.0, 1335.0], [34.1, 1335.0], [34.2, 1335.0], [34.3, 1335.0], [34.4, 1336.0], [34.5, 1336.0], [34.6, 1336.0], [34.7, 1336.0], [34.8, 1336.0], [34.9, 1336.0], [35.0, 1336.0], [35.1, 1336.0], [35.2, 1336.0], [35.3, 1336.0], [35.4, 1336.0], [35.5, 1336.0], [35.6, 1336.0], [35.7, 1336.0], [35.8, 1336.0], [35.9, 1336.0], [36.0, 1336.0], [36.1, 1336.0], [36.2, 1337.0], [36.3, 1337.0], [36.4, 1337.0], [36.5, 1337.0], [36.6, 1337.0], [36.7, 1337.0], [36.8, 1337.0], [36.9, 1337.0], [37.0, 1337.0], [37.1, 1337.0], [37.2, 1338.0], [37.3, 1338.0], [37.4, 1338.0], [37.5, 1338.0], [37.6, 1338.0], [37.7, 1338.0], [37.8, 1338.0], [37.9, 1338.0], [38.0, 1338.0], [38.1, 1339.0], [38.2, 1339.0], [38.3, 1339.0], [38.4, 1339.0], [38.5, 1339.0], [38.6, 1339.0], [38.7, 1339.0], [38.8, 1339.0], [38.9, 1339.0], [39.0, 1339.0], [39.1, 1339.0], [39.2, 1339.0], [39.3, 1340.0], [39.4, 1340.0], [39.5, 1340.0], [39.6, 1340.0], [39.7, 1340.0], [39.8, 1340.0], [39.9, 1340.0], [40.0, 1340.0], [40.1, 1340.0], [40.2, 1340.0], [40.3, 1340.0], [40.4, 1340.0], [40.5, 1340.0], [40.6, 1340.0], [40.7, 1340.0], [40.8, 1340.0], [40.9, 1340.0], [41.0, 1340.0], [41.1, 1340.0], [41.2, 1340.0], [41.3, 1341.0], [41.4, 1341.0], [41.5, 1341.0], [41.6, 1341.0], [41.7, 1341.0], [41.8, 1341.0], [41.9, 1341.0], [42.0, 1341.0], [42.1, 1341.0], [42.2, 1341.0], [42.3, 1341.0], [42.4, 1341.0], [42.5, 1341.0], [42.6, 1341.0], [42.7, 1342.0], [42.8, 1342.0], [42.9, 1342.0], [43.0, 1342.0], [43.1, 1342.0], [43.2, 1342.0], [43.3, 1342.0], [43.4, 1342.0], [43.5, 1342.0], [43.6, 1342.0], [43.7, 1342.0], [43.8, 1342.0], [43.9, 1342.0], [44.0, 1342.0], [44.1, 1342.0], [44.2, 1342.0], [44.3, 1342.0], [44.4, 1342.0], [44.5, 1343.0], [44.6, 1343.0], [44.7, 1343.0], [44.8, 1343.0], [44.9, 1343.0], [45.0, 1343.0], [45.1, 1343.0], [45.2, 1343.0], [45.3, 1343.0], [45.4, 1343.0], [45.5, 1343.0], [45.6, 1343.0], [45.7, 1343.0], [45.8, 1344.0], [45.9, 1344.0], [46.0, 1344.0], [46.1, 1344.0], [46.2, 1344.0], [46.3, 1344.0], [46.4, 1344.0], [46.5, 1344.0], [46.6, 1344.0], [46.7, 1344.0], [46.8, 1344.0], [46.9, 1344.0], [47.0, 1344.0], [47.1, 1344.0], [47.2, 1345.0], [47.3, 1345.0], [47.4, 1345.0], [47.5, 1345.0], [47.6, 1345.0], [47.7, 1345.0], [47.8, 1345.0], [47.9, 1345.0], [48.0, 1345.0], [48.1, 1346.0], [48.2, 1346.0], [48.3, 1346.0], [48.4, 1346.0], [48.5, 1346.0], [48.6, 1346.0], [48.7, 1346.0], [48.8, 1346.0], [48.9, 1346.0], [49.0, 1346.0], [49.1, 1346.0], [49.2, 1346.0], [49.3, 1346.0], [49.4, 1346.0], [49.5, 1347.0], [49.6, 1347.0], [49.7, 1347.0], [49.8, 1347.0], [49.9, 1347.0], [50.0, 1347.0], [50.1, 1348.0], [50.2, 1348.0], [50.3, 1348.0], [50.4, 1348.0], [50.5, 1348.0], [50.6, 1348.0], [50.7, 1348.0], [50.8, 1348.0], [50.9, 1348.0], [51.0, 1348.0], [51.1, 1349.0], [51.2, 1349.0], [51.3, 1349.0], [51.4, 1349.0], [51.5, 1349.0], [51.6, 1349.0], [51.7, 1349.0], [51.8, 1349.0], [51.9, 1349.0], [52.0, 1349.0], [52.1, 1349.0], [52.2, 1349.0], [52.3, 1349.0], [52.4, 1349.0], [52.5, 1349.0], [52.6, 1349.0], [52.7, 1349.0], [52.8, 1349.0], [52.9, 1349.0], [53.0, 1349.0], [53.1, 1350.0], [53.2, 1350.0], [53.3, 1350.0], [53.4, 1350.0], [53.5, 1350.0], [53.6, 1350.0], [53.7, 1350.0], [53.8, 1350.0], [53.9, 1350.0], [54.0, 1350.0], [54.1, 1350.0], [54.2, 1350.0], [54.3, 1350.0], [54.4, 1350.0], [54.5, 1351.0], [54.6, 1351.0], [54.7, 1351.0], [54.8, 1351.0], [54.9, 1351.0], [55.0, 1351.0], [55.1, 1351.0], [55.2, 1352.0], [55.3, 1352.0], [55.4, 1352.0], [55.5, 1352.0], [55.6, 1352.0], [55.7, 1352.0], [55.8, 1352.0], [55.9, 1352.0], [56.0, 1352.0], [56.1, 1352.0], [56.2, 1353.0], [56.3, 1353.0], [56.4, 1353.0], [56.5, 1353.0], [56.6, 1353.0], [56.7, 1353.0], [56.8, 1353.0], [56.9, 1353.0], [57.0, 1353.0], [57.1, 1354.0], [57.2, 1354.0], [57.3, 1354.0], [57.4, 1354.0], [57.5, 1354.0], [57.6, 1354.0], [57.7, 1354.0], [57.8, 1354.0], [57.9, 1354.0], [58.0, 1354.0], [58.1, 1354.0], [58.2, 1354.0], [58.3, 1354.0], [58.4, 1355.0], [58.5, 1355.0], [58.6, 1355.0], [58.7, 1355.0], [58.8, 1355.0], [58.9, 1355.0], [59.0, 1355.0], [59.1, 1355.0], [59.2, 1355.0], [59.3, 1355.0], [59.4, 1356.0], [59.5, 1356.0], [59.6, 1356.0], [59.7, 1356.0], [59.8, 1356.0], [59.9, 1356.0], [60.0, 1356.0], [60.1, 1356.0], [60.2, 1357.0], [60.3, 1357.0], [60.4, 1357.0], [60.5, 1357.0], [60.6, 1357.0], [60.7, 1357.0], [60.8, 1357.0], [60.9, 1357.0], [61.0, 1357.0], [61.1, 1357.0], [61.2, 1357.0], [61.3, 1357.0], [61.4, 1358.0], [61.5, 1358.0], [61.6, 1358.0], [61.7, 1358.0], [61.8, 1358.0], [61.9, 1358.0], [62.0, 1358.0], [62.1, 1358.0], [62.2, 1358.0], [62.3, 1358.0], [62.4, 1358.0], [62.5, 1358.0], [62.6, 1358.0], [62.7, 1358.0], [62.8, 1358.0], [62.9, 1358.0], [63.0, 1359.0], [63.1, 1359.0], [63.2, 1359.0], [63.3, 1359.0], [63.4, 1359.0], [63.5, 1359.0], [63.6, 1359.0], [63.7, 1359.0], [63.8, 1359.0], [63.9, 1359.0], [64.0, 1359.0], [64.1, 1359.0], [64.2, 1360.0], [64.3, 1360.0], [64.4, 1360.0], [64.5, 1360.0], [64.6, 1360.0], [64.7, 1360.0], [64.8, 1360.0], [64.9, 1360.0], [65.0, 1360.0], [65.1, 1360.0], [65.2, 1360.0], [65.3, 1360.0], [65.4, 1360.0], [65.5, 1360.0], [65.6, 1360.0], [65.7, 1360.0], [65.8, 1360.0], [65.9, 1361.0], [66.0, 1361.0], [66.1, 1361.0], [66.2, 1361.0], [66.3, 1361.0], [66.4, 1361.0], [66.5, 1361.0], [66.6, 1361.0], [66.7, 1361.0], [66.8, 1361.0], [66.9, 1361.0], [67.0, 1362.0], [67.1, 1362.0], [67.2, 1362.0], [67.3, 1362.0], [67.4, 1362.0], [67.5, 1362.0], [67.6, 1362.0], [67.7, 1362.0], [67.8, 1362.0], [67.9, 1362.0], [68.0, 1362.0], [68.1, 1362.0], [68.2, 1362.0], [68.3, 1363.0], [68.4, 1363.0], [68.5, 1363.0], [68.6, 1363.0], [68.7, 1363.0], [68.8, 1363.0], [68.9, 1363.0], [69.0, 1363.0], [69.1, 1363.0], [69.2, 1364.0], [69.3, 1364.0], [69.4, 1364.0], [69.5, 1364.0], [69.6, 1364.0], [69.7, 1364.0], [69.8, 1364.0], [69.9, 1364.0], [70.0, 1364.0], [70.1, 1364.0], [70.2, 1364.0], [70.3, 1364.0], [70.4, 1364.0], [70.5, 1364.0], [70.6, 1364.0], [70.7, 1364.0], [70.8, 1365.0], [70.9, 1365.0], [71.0, 1365.0], [71.1, 1365.0], [71.2, 1365.0], [71.3, 1365.0], [71.4, 1365.0], [71.5, 1365.0], [71.6, 1365.0], [71.7, 1365.0], [71.8, 1365.0], [71.9, 1365.0], [72.0, 1365.0], [72.1, 1365.0], [72.2, 1365.0], [72.3, 1365.0], [72.4, 1365.0], [72.5, 1365.0], [72.6, 1366.0], [72.7, 1366.0], [72.8, 1366.0], [72.9, 1366.0], [73.0, 1366.0], [73.1, 1366.0], [73.2, 1366.0], [73.3, 1366.0], [73.4, 1366.0], [73.5, 1366.0], [73.6, 1366.0], [73.7, 1366.0], [73.8, 1366.0], [73.9, 1366.0], [74.0, 1366.0], [74.1, 1367.0], [74.2, 1367.0], [74.3, 1367.0], [74.4, 1367.0], [74.5, 1367.0], [74.6, 1367.0], [74.7, 1367.0], [74.8, 1367.0], [74.9, 1367.0], [75.0, 1367.0], [75.1, 1367.0], [75.2, 1368.0], [75.3, 1368.0], [75.4, 1368.0], [75.5, 1368.0], [75.6, 1368.0], [75.7, 1368.0], [75.8, 1368.0], [75.9, 1368.0], [76.0, 1368.0], [76.1, 1368.0], [76.2, 1368.0], [76.3, 1368.0], [76.4, 1369.0], [76.5, 1369.0], [76.6, 1369.0], [76.7, 1369.0], [76.8, 1369.0], [76.9, 1369.0], [77.0, 1369.0], [77.1, 1369.0], [77.2, 1370.0], [77.3, 1370.0], [77.4, 1370.0], [77.5, 1370.0], [77.6, 1370.0], [77.7, 1371.0], [77.8, 1371.0], [77.9, 1371.0], [78.0, 1371.0], [78.1, 1371.0], [78.2, 1371.0], [78.3, 1371.0], [78.4, 1372.0], [78.5, 1372.0], [78.6, 1372.0], [78.7, 1372.0], [78.8, 1372.0], [78.9, 1372.0], [79.0, 1372.0], [79.1, 1372.0], [79.2, 1372.0], [79.3, 1372.0], [79.4, 1373.0], [79.5, 1373.0], [79.6, 1373.0], [79.7, 1373.0], [79.8, 1373.0], [79.9, 1373.0], [80.0, 1373.0], [80.1, 1373.0], [80.2, 1373.0], [80.3, 1373.0], [80.4, 1374.0], [80.5, 1374.0], [80.6, 1374.0], [80.7, 1374.0], [80.8, 1374.0], [80.9, 1374.0], [81.0, 1374.0], [81.1, 1374.0], [81.2, 1374.0], [81.3, 1375.0], [81.4, 1375.0], [81.5, 1375.0], [81.6, 1375.0], [81.7, 1375.0], [81.8, 1375.0], [81.9, 1375.0], [82.0, 1375.0], [82.1, 1376.0], [82.2, 1376.0], [82.3, 1376.0], [82.4, 1376.0], [82.5, 1376.0], [82.6, 1376.0], [82.7, 1376.0], [82.8, 1376.0], [82.9, 1376.0], [83.0, 1376.0], [83.1, 1377.0], [83.2, 1377.0], [83.3, 1377.0], [83.4, 1377.0], [83.5, 1377.0], [83.6, 1378.0], [83.7, 1378.0], [83.8, 1378.0], [83.9, 1378.0], [84.0, 1378.0], [84.1, 1378.0], [84.2, 1378.0], [84.3, 1378.0], [84.4, 1379.0], [84.5, 1379.0], [84.6, 1379.0], [84.7, 1379.0], [84.8, 1379.0], [84.9, 1380.0], [85.0, 1380.0], [85.1, 1380.0], [85.2, 1380.0], [85.3, 1380.0], [85.4, 1380.0], [85.5, 1380.0], [85.6, 1380.0], [85.7, 1381.0], [85.8, 1381.0], [85.9, 1381.0], [86.0, 1382.0], [86.1, 1382.0], [86.2, 1382.0], [86.3, 1383.0], [86.4, 1383.0], [86.5, 1383.0], [86.6, 1383.0], [86.7, 1383.0], [86.8, 1383.0], [86.9, 1383.0], [87.0, 1383.0], [87.1, 1384.0], [87.2, 1384.0], [87.3, 1384.0], [87.4, 1384.0], [87.5, 1384.0], [87.6, 1384.0], [87.7, 1384.0], [87.8, 1385.0], [87.9, 1385.0], [88.0, 1385.0], [88.1, 1386.0], [88.2, 1386.0], [88.3, 1386.0], [88.4, 1386.0], [88.5, 1386.0], [88.6, 1387.0], [88.7, 1387.0], [88.8, 1387.0], [88.9, 1387.0], [89.0, 1387.0], [89.1, 1387.0], [89.2, 1388.0], [89.3, 1388.0], [89.4, 1388.0], [89.5, 1388.0], [89.6, 1388.0], [89.7, 1389.0], [89.8, 1389.0], [89.9, 1389.0], [90.0, 1390.0], [90.1, 1390.0], [90.2, 1390.0], [90.3, 1390.0], [90.4, 1391.0], [90.5, 1391.0], [90.6, 1391.0], [90.7, 1391.0], [90.8, 1392.0], [90.9, 1392.0], [91.0, 1393.0], [91.1, 1393.0], [91.2, 1394.0], [91.3, 1395.0], [91.4, 1395.0], [91.5, 1395.0], [91.6, 1395.0], [91.7, 1396.0], [91.8, 1397.0], [91.9, 1397.0], [92.0, 1397.0], [92.1, 1397.0], [92.2, 1398.0], [92.3, 1398.0], [92.4, 1398.0], [92.5, 1400.0], [92.6, 1400.0], [92.7, 1400.0], [92.8, 1400.0], [92.9, 1402.0], [93.0, 1402.0], [93.1, 1402.0], [93.2, 1402.0], [93.3, 1402.0], [93.4, 1403.0], [93.5, 1403.0], [93.6, 1403.0], [93.7, 1405.0], [93.8, 1405.0], [93.9, 1406.0], [94.0, 1406.0], [94.1, 1406.0], [94.2, 1410.0], [94.3, 1410.0], [94.4, 1411.0], [94.5, 1411.0], [94.6, 1411.0], [94.7, 1413.0], [94.8, 1414.0], [94.9, 1416.0], [95.0, 1416.0], [95.1, 1417.0], [95.2, 1419.0], [95.3, 1421.0], [95.4, 1422.0], [95.5, 1422.0], [95.6, 1426.0], [95.7, 1426.0], [95.8, 1430.0], [95.9, 1434.0], [96.0, 1434.0], [96.1, 1435.0], [96.2, 1435.0], [96.3, 1437.0], [96.4, 1442.0], [96.5, 1443.0], [96.6, 1443.0], [96.7, 1445.0], [96.8, 1448.0], [96.9, 1451.0], [97.0, 1455.0], [97.1, 1456.0], [97.2, 1459.0], [97.3, 1460.0], [97.4, 1469.0], [97.5, 1474.0], [97.6, 1486.0], [97.7, 1489.0], [97.8, 1493.0], [97.9, 1513.0], [98.0, 1537.0], [98.1, 1542.0], [98.2, 1556.0], [98.3, 1567.0], [98.4, 1582.0], [98.5, 1669.0], [98.6, 1721.0], [98.7, 1774.0], [98.8, 1822.0], [98.9, 1829.0], [99.0, 1851.0], [99.1, 1861.0], [99.2, 1867.0], [99.3, 1892.0], [99.4, 1946.0], [99.5, 1956.0], [99.6, 1994.0], [99.7, 2106.0], [99.8, 2580.0], [99.9, 2789.0]], "isOverall": false, "label": "Submit Score", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 693.0, "series": [{"data": [[0.0, 1.0], [2100.0, 1.0], [2500.0, 1.0], [700.0, 31.0], [2700.0, 1.0], [800.0, 191.0], [900.0, 4.0], [1000.0, 2.0], [1100.0, 2.0], [1200.0, 1.0], [1300.0, 693.0], [1400.0, 54.0], [1500.0, 6.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 6.0], [1900.0, 3.0]], "isOverall": false, "label": "Submit Score", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 978.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 978.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.6500000000000004, "minX": 1.62361308E12, "maxY": 2.0, "series": [{"data": [[1.62361368E12, 1.7333333333333325], [1.62361338E12, 1.8166666666666669], [1.62361404E12, 1.7499999999999993], [1.62361308E12, 2.0], [1.62361374E12, 1.6500000000000004], [1.62361392E12, 1.766666666666666], [1.62361362E12, 1.733333333333333], [1.62361332E12, 1.7377049180327868], [1.62361398E12, 1.8166666666666664], [1.6236132E12, 1.7999999999999998], [1.62361386E12, 1.7833333333333334], [1.62361356E12, 1.7000000000000002], [1.62361326E12, 1.915254237288136], [1.62361344E12, 1.8000000000000003], [1.6236141E12, 1.7333333333333334], [1.62361314E12, 1.7666666666666664], [1.6236138E12, 1.7666666666666662], [1.6236135E12, 1.8499999999999994]], "isOverall": false, "label": "Sharp Games", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6236141E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 829.9162995594717, "minX": 1.0, "maxY": 1744.0, "series": [{"data": [[2.0, 1366.5979247730224], [1.0, 829.9162995594717], [3.0, 1744.0]], "isOverall": false, "label": "Submit Score", "isController": false}, {"data": [[1.7750000000000001, 1245.5260000000005]], "isOverall": false, "label": "Submit Score-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 128.33333333333334, "minX": 1.62361308E12, "maxY": 1012.05, "series": [{"data": [[1.62361368E12, 959.3666666666667], [1.62361338E12, 960.6333333333333], [1.62361404E12, 959.8], [1.62361308E12, 160.03333333333333], [1.62361374E12, 959.7], [1.62361392E12, 960.5], [1.62361362E12, 959.6], [1.62361332E12, 975.5666666666667], [1.62361398E12, 959.7666666666667], [1.6236132E12, 959.3666666666667], [1.62361386E12, 959.9666666666667], [1.62361356E12, 959.9333333333333], [1.62361326E12, 943.6], [1.62361344E12, 1012.05], [1.6236141E12, 479.9], [1.62361314E12, 958.7333333333333], [1.6236138E12, 959.8666666666667], [1.6236135E12, 960.7666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62361368E12, 774.8333333333334], [1.62361338E12, 779.5], [1.62361404E12, 779.0833333333334], [1.62361308E12, 128.33333333333334], [1.62361374E12, 772.1666666666666], [1.62361392E12, 780.3333333333334], [1.62361362E12, 776.8333333333334], [1.62361332E12, 788.7833333333333], [1.62361398E12, 777.5833333333334], [1.6236132E12, 776.3333333333334], [1.62361386E12, 778.25], [1.62361356E12, 777.3333333333334], [1.62361326E12, 766.3833333333333], [1.62361344E12, 760.4666666666667], [1.6236141E12, 388.0], [1.62361314E12, 778.75], [1.6236138E12, 772.0], [1.6236135E12, 779.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6236141E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1172.483333333334, "minX": 1.62361308E12, "maxY": 1385.1999999999998, "series": [{"data": [[1.62361368E12, 1234.5499999999995], [1.62361338E12, 1270.716666666667], [1.62361404E12, 1230.0666666666662], [1.62361308E12, 1385.1999999999998], [1.62361374E12, 1172.483333333334], [1.62361392E12, 1249.2333333333327], [1.62361362E12, 1216.4000000000003], [1.62361332E12, 1225.0655737704922], [1.62361398E12, 1267.366666666666], [1.6236132E12, 1265.0833333333337], [1.62361386E12, 1245.7833333333335], [1.62361356E12, 1197.6000000000001], [1.62361326E12, 1323.4915254237287], [1.62361344E12, 1236.5333333333335], [1.6236141E12, 1227.3666666666666], [1.62361314E12, 1247.5499999999997], [1.6236138E12, 1240.6833333333334], [1.6236135E12, 1293.2499999999993]], "isOverall": false, "label": "Submit Score", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6236141E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1171.95, "minX": 1.62361308E12, "maxY": 1384.6, "series": [{"data": [[1.62361368E12, 1234.0333333333326], [1.62361338E12, 1270.0666666666668], [1.62361404E12, 1229.5000000000002], [1.62361308E12, 1384.6], [1.62361374E12, 1171.95], [1.62361392E12, 1248.6500000000003], [1.62361362E12, 1215.8], [1.62361332E12, 1224.1639344262292], [1.62361398E12, 1266.8666666666666], [1.6236132E12, 1264.533333333333], [1.62361386E12, 1245.283333333333], [1.62361356E12, 1197.216666666667], [1.62361326E12, 1322.3050847457628], [1.62361344E12, 1235.75], [1.6236141E12, 1226.7], [1.62361314E12, 1246.9166666666663], [1.6236138E12, 1240.0000000000005], [1.6236135E12, 1292.3]], "isOverall": false, "label": "Submit Score", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6236141E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 391.8333333333332, "minX": 1.62361308E12, "maxY": 431.2, "series": [{"data": [[1.62361368E12, 398.3166666666667], [1.62361338E12, 397.3], [1.62361404E12, 399.6666666666665], [1.62361308E12, 431.2], [1.62361374E12, 403.11666666666673], [1.62361392E12, 402.0333333333335], [1.62361362E12, 400.1166666666667], [1.62361332E12, 407.78688524590154], [1.62361398E12, 397.6333333333332], [1.6236132E12, 399.1166666666666], [1.62361386E12, 397.43333333333345], [1.62361356E12, 396.80000000000007], [1.62361326E12, 397.3050847457627], [1.62361344E12, 391.8333333333332], [1.6236141E12, 396.5333333333333], [1.62361314E12, 408.73333333333346], [1.6236138E12, 399.40000000000015], [1.6236135E12, 396.8833333333334]], "isOverall": false, "label": "Submit Score", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6236141E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 785.0, "minX": 1.62361308E12, "maxY": 2789.0, "series": [{"data": [[1.62361368E12, 2789.0], [1.62361338E12, 1946.0], [1.62361404E12, 1486.0], [1.62361308E12, 1669.0], [1.62361374E12, 1556.0], [1.62361392E12, 1956.0], [1.62361362E12, 1493.0], [1.62361332E12, 1829.0], [1.62361398E12, 2106.0], [1.6236132E12, 1892.0], [1.62361386E12, 1469.0], [1.62361356E12, 1513.0], [1.62361326E12, 2580.0], [1.62361344E12, 1448.0], [1.6236141E12, 1395.0], [1.62361314E12, 1861.0], [1.6236138E12, 1567.0], [1.6236135E12, 1994.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62361368E12, 1388.3], [1.62361338E12, 1398.4], [1.62361404E12, 1396.7], [1.62361308E12, 1639.4], [1.62361374E12, 1402.4], [1.62361392E12, 1414.9], [1.62361362E12, 1383.9], [1.62361332E12, 1386.0], [1.62361398E12, 1401.8], [1.6236132E12, 1385.8], [1.62361386E12, 1412.2], [1.62361356E12, 1376.9], [1.62361326E12, 1398.0], [1.62361344E12, 1387.0], [1.6236141E12, 1369.8], [1.62361314E12, 1386.6], [1.6236138E12, 1389.9], [1.6236135E12, 1379.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62361368E12, 2789.0], [1.62361338E12, 1946.0], [1.62361404E12, 1486.0], [1.62361308E12, 1669.0], [1.62361374E12, 1556.0], [1.62361392E12, 1956.0], [1.62361362E12, 1493.0], [1.62361332E12, 1829.0], [1.62361398E12, 2106.0], [1.6236132E12, 1892.0], [1.62361386E12, 1469.0], [1.62361356E12, 1513.0], [1.62361326E12, 2580.0], [1.62361344E12, 1448.0], [1.6236141E12, 1395.0], [1.62361314E12, 1861.0], [1.6236138E12, 1567.0], [1.6236135E12, 1994.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62361368E12, 1472.4499999999998], [1.62361338E12, 1421.5], [1.62361404E12, 1432.6999999999998], [1.62361308E12, 1669.0], [1.62361374E12, 1434.1], [1.62361392E12, 1454.1], [1.62361362E12, 1392.95], [1.62361332E12, 1410.9], [1.62361398E12, 1405.8], [1.6236132E12, 1534.4499999999994], [1.62361386E12, 1442.55], [1.62361356E12, 1395.0], [1.62361326E12, 1451.0], [1.62361344E12, 1416.0], [1.6236141E12, 1390.6], [1.62361314E12, 1440.85], [1.6236138E12, 1425.25], [1.6236135E12, 1827.9999999999982]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62361368E12, 785.0], [1.62361338E12, 790.0], [1.62361404E12, 792.0], [1.62361308E12, 1323.0], [1.62361374E12, 787.0], [1.62361392E12, 787.0], [1.62361362E12, 802.0], [1.62361332E12, 798.0], [1.62361398E12, 794.0], [1.6236132E12, 787.0], [1.62361386E12, 791.0], [1.62361356E12, 789.0], [1.62361326E12, 804.0], [1.62361344E12, 790.0], [1.6236141E12, 790.0], [1.62361314E12, 793.0], [1.6236138E12, 803.0], [1.6236135E12, 786.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62361368E12, 1345.5], [1.62361338E12, 1350.0], [1.62361404E12, 1355.0], [1.62361308E12, 1357.0], [1.62361374E12, 1335.5], [1.62361392E12, 1350.0], [1.62361362E12, 1344.0], [1.62361332E12, 1345.0], [1.62361398E12, 1354.5], [1.6236132E12, 1349.5], [1.62361386E12, 1344.0], [1.62361356E12, 1343.0], [1.62361326E12, 1346.0], [1.62361344E12, 1344.0], [1.6236141E12, 1351.5], [1.62361314E12, 1348.5], [1.6236138E12, 1355.0], [1.6236135E12, 1342.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6236141E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 1434.0, "series": [{"data": [[2.0, 1434.0], [1.0, 1346.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 9.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1434.0, "series": [{"data": [[2.0, 1434.0], [1.0, 1346.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.62361308E12, "maxY": 1.0, "series": [{"data": [[1.62361368E12, 1.0], [1.62361338E12, 1.0], [1.62361404E12, 1.0], [1.62361308E12, 0.18333333333333332], [1.62361374E12, 1.0], [1.62361392E12, 1.0], [1.62361362E12, 1.0], [1.62361332E12, 1.0], [1.62361398E12, 1.0], [1.6236132E12, 1.0], [1.62361386E12, 1.0], [1.62361356E12, 1.0], [1.62361326E12, 1.0], [1.62361344E12, 1.0], [1.6236141E12, 0.48333333333333334], [1.62361314E12, 1.0], [1.6236138E12, 1.0], [1.6236135E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6236141E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62361308E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62361344E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.62361368E12, 1.0], [1.62361338E12, 1.0], [1.62361404E12, 1.0], [1.62361308E12, 0.16666666666666666], [1.62361374E12, 1.0], [1.62361392E12, 1.0], [1.62361362E12, 1.0], [1.62361332E12, 1.0166666666666666], [1.62361398E12, 1.0], [1.6236132E12, 1.0], [1.62361386E12, 1.0], [1.62361356E12, 1.0], [1.62361326E12, 0.9833333333333333], [1.62361344E12, 0.9833333333333333], [1.6236141E12, 0.5], [1.62361314E12, 1.0], [1.6236138E12, 1.0], [1.6236135E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6236141E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62361308E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62361368E12, 1.0], [1.62361338E12, 1.0], [1.62361404E12, 1.0], [1.62361308E12, 0.16666666666666666], [1.62361374E12, 1.0], [1.62361392E12, 1.0], [1.62361362E12, 1.0], [1.62361332E12, 1.0166666666666666], [1.62361398E12, 1.0], [1.6236132E12, 1.0], [1.62361386E12, 1.0], [1.62361356E12, 1.0], [1.62361326E12, 0.9833333333333333], [1.62361344E12, 0.9833333333333333], [1.6236141E12, 0.5], [1.62361314E12, 1.0], [1.6236138E12, 1.0], [1.6236135E12, 1.0]], "isOverall": false, "label": "Submit Score-success", "isController": false}, {"data": [[1.62361344E12, 0.016666666666666666]], "isOverall": false, "label": "Submit Score-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6236141E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62361308E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62361368E12, 1.0], [1.62361338E12, 1.0], [1.62361404E12, 1.0], [1.62361308E12, 0.16666666666666666], [1.62361374E12, 1.0], [1.62361392E12, 1.0], [1.62361362E12, 1.0], [1.62361332E12, 1.0166666666666666], [1.62361398E12, 1.0], [1.6236132E12, 1.0], [1.62361386E12, 1.0], [1.62361356E12, 1.0], [1.62361326E12, 0.9833333333333333], [1.62361344E12, 0.9833333333333333], [1.6236141E12, 0.5], [1.62361314E12, 1.0], [1.6236138E12, 1.0], [1.6236135E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62361344E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6236141E12, "title": "Total Transactions Per Second"}},
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

