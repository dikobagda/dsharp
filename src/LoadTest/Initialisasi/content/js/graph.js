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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 2429.0, "series": [{"data": [[0.0, 13.0], [0.1, 15.0], [0.2, 787.0], [0.3, 787.0], [0.4, 790.0], [0.5, 792.0], [0.6, 793.0], [0.7, 794.0], [0.8, 794.0], [0.9, 794.0], [1.0, 795.0], [1.1, 796.0], [1.2, 796.0], [1.3, 797.0], [1.4, 797.0], [1.5, 797.0], [1.6, 798.0], [1.7, 798.0], [1.8, 799.0], [1.9, 799.0], [2.0, 800.0], [2.1, 800.0], [2.2, 801.0], [2.3, 801.0], [2.4, 801.0], [2.5, 802.0], [2.6, 803.0], [2.7, 803.0], [2.8, 803.0], [2.9, 803.0], [3.0, 804.0], [3.1, 805.0], [3.2, 805.0], [3.3, 805.0], [3.4, 805.0], [3.5, 806.0], [3.6, 806.0], [3.7, 807.0], [3.8, 807.0], [3.9, 808.0], [4.0, 808.0], [4.1, 808.0], [4.2, 809.0], [4.3, 809.0], [4.4, 810.0], [4.5, 810.0], [4.6, 810.0], [4.7, 810.0], [4.8, 810.0], [4.9, 810.0], [5.0, 810.0], [5.1, 811.0], [5.2, 811.0], [5.3, 811.0], [5.4, 811.0], [5.5, 812.0], [5.6, 812.0], [5.7, 812.0], [5.8, 812.0], [5.9, 813.0], [6.0, 813.0], [6.1, 813.0], [6.2, 813.0], [6.3, 813.0], [6.4, 813.0], [6.5, 814.0], [6.6, 814.0], [6.7, 814.0], [6.8, 815.0], [6.9, 815.0], [7.0, 816.0], [7.1, 816.0], [7.2, 816.0], [7.3, 816.0], [7.4, 816.0], [7.5, 816.0], [7.6, 816.0], [7.7, 817.0], [7.8, 817.0], [7.9, 817.0], [8.0, 817.0], [8.1, 817.0], [8.2, 818.0], [8.3, 818.0], [8.4, 818.0], [8.5, 818.0], [8.6, 818.0], [8.7, 818.0], [8.8, 819.0], [8.9, 819.0], [9.0, 819.0], [9.1, 819.0], [9.2, 819.0], [9.3, 819.0], [9.4, 819.0], [9.5, 819.0], [9.6, 819.0], [9.7, 820.0], [9.8, 820.0], [9.9, 820.0], [10.0, 820.0], [10.1, 820.0], [10.2, 820.0], [10.3, 820.0], [10.4, 820.0], [10.5, 820.0], [10.6, 821.0], [10.7, 821.0], [10.8, 821.0], [10.9, 821.0], [11.0, 821.0], [11.1, 821.0], [11.2, 821.0], [11.3, 821.0], [11.4, 821.0], [11.5, 821.0], [11.6, 822.0], [11.7, 822.0], [11.8, 822.0], [11.9, 822.0], [12.0, 822.0], [12.1, 822.0], [12.2, 822.0], [12.3, 824.0], [12.4, 824.0], [12.5, 824.0], [12.6, 824.0], [12.7, 824.0], [12.8, 825.0], [12.9, 825.0], [13.0, 825.0], [13.1, 825.0], [13.2, 825.0], [13.3, 825.0], [13.4, 825.0], [13.5, 825.0], [13.6, 825.0], [13.7, 826.0], [13.8, 826.0], [13.9, 826.0], [14.0, 826.0], [14.1, 826.0], [14.2, 826.0], [14.3, 827.0], [14.4, 827.0], [14.5, 827.0], [14.6, 827.0], [14.7, 828.0], [14.8, 828.0], [14.9, 828.0], [15.0, 828.0], [15.1, 828.0], [15.2, 828.0], [15.3, 829.0], [15.4, 829.0], [15.5, 829.0], [15.6, 829.0], [15.7, 829.0], [15.8, 830.0], [15.9, 830.0], [16.0, 830.0], [16.1, 830.0], [16.2, 830.0], [16.3, 831.0], [16.4, 831.0], [16.5, 831.0], [16.6, 832.0], [16.7, 832.0], [16.8, 832.0], [16.9, 832.0], [17.0, 832.0], [17.1, 833.0], [17.2, 833.0], [17.3, 833.0], [17.4, 833.0], [17.5, 834.0], [17.6, 835.0], [17.7, 835.0], [17.8, 835.0], [17.9, 835.0], [18.0, 835.0], [18.1, 836.0], [18.2, 836.0], [18.3, 836.0], [18.4, 836.0], [18.5, 838.0], [18.6, 838.0], [18.7, 838.0], [18.8, 839.0], [18.9, 839.0], [19.0, 839.0], [19.1, 840.0], [19.2, 840.0], [19.3, 841.0], [19.4, 841.0], [19.5, 842.0], [19.6, 844.0], [19.7, 844.0], [19.8, 845.0], [19.9, 845.0], [20.0, 846.0], [20.1, 847.0], [20.2, 847.0], [20.3, 848.0], [20.4, 850.0], [20.5, 851.0], [20.6, 851.0], [20.7, 852.0], [20.8, 852.0], [20.9, 857.0], [21.0, 863.0], [21.1, 864.0], [21.2, 864.0], [21.3, 873.0], [21.4, 874.0], [21.5, 876.0], [21.6, 880.0], [21.7, 882.0], [21.8, 888.0], [21.9, 899.0], [22.0, 910.0], [22.1, 927.0], [22.2, 928.0], [22.3, 968.0], [22.4, 1006.0], [22.5, 1009.0], [22.6, 1078.0], [22.7, 1137.0], [22.8, 1222.0], [22.9, 1312.0], [23.0, 1312.0], [23.1, 1313.0], [23.2, 1314.0], [23.3, 1314.0], [23.4, 1315.0], [23.5, 1315.0], [23.6, 1315.0], [23.7, 1315.0], [23.8, 1316.0], [23.9, 1316.0], [24.0, 1316.0], [24.1, 1317.0], [24.2, 1317.0], [24.3, 1317.0], [24.4, 1317.0], [24.5, 1318.0], [24.6, 1318.0], [24.7, 1318.0], [24.8, 1318.0], [24.9, 1318.0], [25.0, 1319.0], [25.1, 1319.0], [25.2, 1319.0], [25.3, 1319.0], [25.4, 1319.0], [25.5, 1320.0], [25.6, 1320.0], [25.7, 1320.0], [25.8, 1320.0], [25.9, 1321.0], [26.0, 1321.0], [26.1, 1321.0], [26.2, 1321.0], [26.3, 1321.0], [26.4, 1321.0], [26.5, 1321.0], [26.6, 1321.0], [26.7, 1322.0], [26.8, 1322.0], [26.9, 1322.0], [27.0, 1323.0], [27.1, 1323.0], [27.2, 1323.0], [27.3, 1324.0], [27.4, 1324.0], [27.5, 1325.0], [27.6, 1325.0], [27.7, 1326.0], [27.8, 1326.0], [27.9, 1326.0], [28.0, 1327.0], [28.1, 1328.0], [28.2, 1328.0], [28.3, 1329.0], [28.4, 1329.0], [28.5, 1329.0], [28.6, 1329.0], [28.7, 1330.0], [28.8, 1330.0], [28.9, 1330.0], [29.0, 1331.0], [29.1, 1331.0], [29.2, 1331.0], [29.3, 1331.0], [29.4, 1331.0], [29.5, 1332.0], [29.6, 1332.0], [29.7, 1332.0], [29.8, 1332.0], [29.9, 1332.0], [30.0, 1333.0], [30.1, 1333.0], [30.2, 1333.0], [30.3, 1333.0], [30.4, 1333.0], [30.5, 1334.0], [30.6, 1334.0], [30.7, 1334.0], [30.8, 1335.0], [30.9, 1335.0], [31.0, 1335.0], [31.1, 1335.0], [31.2, 1335.0], [31.3, 1336.0], [31.4, 1336.0], [31.5, 1336.0], [31.6, 1336.0], [31.7, 1336.0], [31.8, 1336.0], [31.9, 1336.0], [32.0, 1336.0], [32.1, 1337.0], [32.2, 1337.0], [32.3, 1337.0], [32.4, 1337.0], [32.5, 1337.0], [32.6, 1337.0], [32.7, 1337.0], [32.8, 1338.0], [32.9, 1338.0], [33.0, 1338.0], [33.1, 1338.0], [33.2, 1338.0], [33.3, 1338.0], [33.4, 1338.0], [33.5, 1338.0], [33.6, 1339.0], [33.7, 1339.0], [33.8, 1339.0], [33.9, 1339.0], [34.0, 1339.0], [34.1, 1339.0], [34.2, 1339.0], [34.3, 1339.0], [34.4, 1339.0], [34.5, 1339.0], [34.6, 1340.0], [34.7, 1340.0], [34.8, 1340.0], [34.9, 1340.0], [35.0, 1340.0], [35.1, 1340.0], [35.2, 1340.0], [35.3, 1340.0], [35.4, 1340.0], [35.5, 1340.0], [35.6, 1340.0], [35.7, 1341.0], [35.8, 1341.0], [35.9, 1341.0], [36.0, 1341.0], [36.1, 1341.0], [36.2, 1341.0], [36.3, 1341.0], [36.4, 1341.0], [36.5, 1341.0], [36.6, 1341.0], [36.7, 1341.0], [36.8, 1341.0], [36.9, 1341.0], [37.0, 1341.0], [37.1, 1341.0], [37.2, 1342.0], [37.3, 1342.0], [37.4, 1342.0], [37.5, 1342.0], [37.6, 1342.0], [37.7, 1342.0], [37.8, 1342.0], [37.9, 1342.0], [38.0, 1342.0], [38.1, 1342.0], [38.2, 1342.0], [38.3, 1343.0], [38.4, 1343.0], [38.5, 1343.0], [38.6, 1343.0], [38.7, 1343.0], [38.8, 1343.0], [38.9, 1343.0], [39.0, 1343.0], [39.1, 1343.0], [39.2, 1343.0], [39.3, 1343.0], [39.4, 1343.0], [39.5, 1344.0], [39.6, 1344.0], [39.7, 1344.0], [39.8, 1344.0], [39.9, 1344.0], [40.0, 1344.0], [40.1, 1344.0], [40.2, 1344.0], [40.3, 1344.0], [40.4, 1345.0], [40.5, 1345.0], [40.6, 1345.0], [40.7, 1345.0], [40.8, 1345.0], [40.9, 1345.0], [41.0, 1345.0], [41.1, 1345.0], [41.2, 1345.0], [41.3, 1345.0], [41.4, 1345.0], [41.5, 1345.0], [41.6, 1346.0], [41.7, 1346.0], [41.8, 1346.0], [41.9, 1346.0], [42.0, 1346.0], [42.1, 1346.0], [42.2, 1346.0], [42.3, 1347.0], [42.4, 1347.0], [42.5, 1347.0], [42.6, 1347.0], [42.7, 1347.0], [42.8, 1347.0], [42.9, 1347.0], [43.0, 1347.0], [43.1, 1347.0], [43.2, 1347.0], [43.3, 1347.0], [43.4, 1348.0], [43.5, 1348.0], [43.6, 1348.0], [43.7, 1348.0], [43.8, 1348.0], [43.9, 1348.0], [44.0, 1348.0], [44.1, 1348.0], [44.2, 1348.0], [44.3, 1348.0], [44.4, 1348.0], [44.5, 1348.0], [44.6, 1348.0], [44.7, 1348.0], [44.8, 1348.0], [44.9, 1348.0], [45.0, 1349.0], [45.1, 1349.0], [45.2, 1349.0], [45.3, 1349.0], [45.4, 1349.0], [45.5, 1349.0], [45.6, 1349.0], [45.7, 1349.0], [45.8, 1350.0], [45.9, 1350.0], [46.0, 1350.0], [46.1, 1350.0], [46.2, 1350.0], [46.3, 1350.0], [46.4, 1350.0], [46.5, 1350.0], [46.6, 1350.0], [46.7, 1350.0], [46.8, 1350.0], [46.9, 1350.0], [47.0, 1350.0], [47.1, 1351.0], [47.2, 1351.0], [47.3, 1351.0], [47.4, 1351.0], [47.5, 1351.0], [47.6, 1351.0], [47.7, 1351.0], [47.8, 1351.0], [47.9, 1351.0], [48.0, 1351.0], [48.1, 1352.0], [48.2, 1352.0], [48.3, 1352.0], [48.4, 1352.0], [48.5, 1352.0], [48.6, 1352.0], [48.7, 1352.0], [48.8, 1352.0], [48.9, 1352.0], [49.0, 1352.0], [49.1, 1352.0], [49.2, 1352.0], [49.3, 1352.0], [49.4, 1352.0], [49.5, 1352.0], [49.6, 1352.0], [49.7, 1352.0], [49.8, 1352.0], [49.9, 1353.0], [50.0, 1353.0], [50.1, 1353.0], [50.2, 1353.0], [50.3, 1353.0], [50.4, 1353.0], [50.5, 1353.0], [50.6, 1353.0], [50.7, 1353.0], [50.8, 1353.0], [50.9, 1353.0], [51.0, 1353.0], [51.1, 1353.0], [51.2, 1353.0], [51.3, 1353.0], [51.4, 1353.0], [51.5, 1353.0], [51.6, 1354.0], [51.7, 1354.0], [51.8, 1354.0], [51.9, 1354.0], [52.0, 1354.0], [52.1, 1354.0], [52.2, 1354.0], [52.3, 1354.0], [52.4, 1354.0], [52.5, 1354.0], [52.6, 1354.0], [52.7, 1354.0], [52.8, 1354.0], [52.9, 1355.0], [53.0, 1355.0], [53.1, 1355.0], [53.2, 1355.0], [53.3, 1355.0], [53.4, 1355.0], [53.5, 1355.0], [53.6, 1355.0], [53.7, 1355.0], [53.8, 1355.0], [53.9, 1356.0], [54.0, 1356.0], [54.1, 1356.0], [54.2, 1356.0], [54.3, 1356.0], [54.4, 1356.0], [54.5, 1356.0], [54.6, 1356.0], [54.7, 1356.0], [54.8, 1356.0], [54.9, 1357.0], [55.0, 1357.0], [55.1, 1357.0], [55.2, 1357.0], [55.3, 1357.0], [55.4, 1357.0], [55.5, 1357.0], [55.6, 1357.0], [55.7, 1357.0], [55.8, 1357.0], [55.9, 1357.0], [56.0, 1358.0], [56.1, 1358.0], [56.2, 1358.0], [56.3, 1358.0], [56.4, 1358.0], [56.5, 1358.0], [56.6, 1358.0], [56.7, 1358.0], [56.8, 1358.0], [56.9, 1358.0], [57.0, 1358.0], [57.1, 1358.0], [57.2, 1358.0], [57.3, 1358.0], [57.4, 1358.0], [57.5, 1359.0], [57.6, 1359.0], [57.7, 1359.0], [57.8, 1359.0], [57.9, 1359.0], [58.0, 1359.0], [58.1, 1359.0], [58.2, 1360.0], [58.3, 1360.0], [58.4, 1360.0], [58.5, 1360.0], [58.6, 1360.0], [58.7, 1360.0], [58.8, 1360.0], [58.9, 1360.0], [59.0, 1360.0], [59.1, 1360.0], [59.2, 1361.0], [59.3, 1361.0], [59.4, 1361.0], [59.5, 1361.0], [59.6, 1361.0], [59.7, 1361.0], [59.8, 1361.0], [59.9, 1361.0], [60.0, 1361.0], [60.1, 1361.0], [60.2, 1361.0], [60.3, 1361.0], [60.4, 1362.0], [60.5, 1362.0], [60.6, 1362.0], [60.7, 1362.0], [60.8, 1362.0], [60.9, 1362.0], [61.0, 1362.0], [61.1, 1362.0], [61.2, 1362.0], [61.3, 1362.0], [61.4, 1362.0], [61.5, 1362.0], [61.6, 1362.0], [61.7, 1362.0], [61.8, 1362.0], [61.9, 1363.0], [62.0, 1363.0], [62.1, 1363.0], [62.2, 1363.0], [62.3, 1363.0], [62.4, 1363.0], [62.5, 1363.0], [62.6, 1363.0], [62.7, 1363.0], [62.8, 1363.0], [62.9, 1363.0], [63.0, 1363.0], [63.1, 1363.0], [63.2, 1363.0], [63.3, 1363.0], [63.4, 1364.0], [63.5, 1364.0], [63.6, 1364.0], [63.7, 1364.0], [63.8, 1364.0], [63.9, 1364.0], [64.0, 1364.0], [64.1, 1364.0], [64.2, 1364.0], [64.3, 1364.0], [64.4, 1364.0], [64.5, 1364.0], [64.6, 1364.0], [64.7, 1364.0], [64.8, 1364.0], [64.9, 1364.0], [65.0, 1364.0], [65.1, 1364.0], [65.2, 1364.0], [65.3, 1364.0], [65.4, 1365.0], [65.5, 1365.0], [65.6, 1365.0], [65.7, 1365.0], [65.8, 1365.0], [65.9, 1365.0], [66.0, 1365.0], [66.1, 1365.0], [66.2, 1366.0], [66.3, 1366.0], [66.4, 1366.0], [66.5, 1366.0], [66.6, 1366.0], [66.7, 1366.0], [66.8, 1366.0], [66.9, 1366.0], [67.0, 1366.0], [67.1, 1366.0], [67.2, 1366.0], [67.3, 1366.0], [67.4, 1366.0], [67.5, 1366.0], [67.6, 1366.0], [67.7, 1366.0], [67.8, 1366.0], [67.9, 1366.0], [68.0, 1366.0], [68.1, 1366.0], [68.2, 1367.0], [68.3, 1367.0], [68.4, 1367.0], [68.5, 1367.0], [68.6, 1367.0], [68.7, 1367.0], [68.8, 1367.0], [68.9, 1367.0], [69.0, 1367.0], [69.1, 1367.0], [69.2, 1367.0], [69.3, 1367.0], [69.4, 1368.0], [69.5, 1368.0], [69.6, 1368.0], [69.7, 1368.0], [69.8, 1368.0], [69.9, 1368.0], [70.0, 1368.0], [70.1, 1368.0], [70.2, 1368.0], [70.3, 1368.0], [70.4, 1369.0], [70.5, 1369.0], [70.6, 1369.0], [70.7, 1369.0], [70.8, 1369.0], [70.9, 1369.0], [71.0, 1369.0], [71.1, 1369.0], [71.2, 1369.0], [71.3, 1369.0], [71.4, 1370.0], [71.5, 1370.0], [71.6, 1370.0], [71.7, 1370.0], [71.8, 1370.0], [71.9, 1370.0], [72.0, 1370.0], [72.1, 1370.0], [72.2, 1370.0], [72.3, 1370.0], [72.4, 1370.0], [72.5, 1370.0], [72.6, 1370.0], [72.7, 1370.0], [72.8, 1371.0], [72.9, 1371.0], [73.0, 1371.0], [73.1, 1371.0], [73.2, 1371.0], [73.3, 1371.0], [73.4, 1371.0], [73.5, 1372.0], [73.6, 1372.0], [73.7, 1372.0], [73.8, 1372.0], [73.9, 1372.0], [74.0, 1372.0], [74.1, 1372.0], [74.2, 1372.0], [74.3, 1372.0], [74.4, 1372.0], [74.5, 1372.0], [74.6, 1372.0], [74.7, 1372.0], [74.8, 1372.0], [74.9, 1372.0], [75.0, 1372.0], [75.1, 1372.0], [75.2, 1372.0], [75.3, 1373.0], [75.4, 1373.0], [75.5, 1373.0], [75.6, 1373.0], [75.7, 1373.0], [75.8, 1373.0], [75.9, 1374.0], [76.0, 1374.0], [76.1, 1374.0], [76.2, 1374.0], [76.3, 1374.0], [76.4, 1374.0], [76.5, 1374.0], [76.6, 1374.0], [76.7, 1374.0], [76.8, 1374.0], [76.9, 1375.0], [77.0, 1375.0], [77.1, 1375.0], [77.2, 1375.0], [77.3, 1375.0], [77.4, 1375.0], [77.5, 1375.0], [77.6, 1375.0], [77.7, 1375.0], [77.8, 1375.0], [77.9, 1375.0], [78.0, 1376.0], [78.1, 1376.0], [78.2, 1376.0], [78.3, 1376.0], [78.4, 1376.0], [78.5, 1376.0], [78.6, 1376.0], [78.7, 1376.0], [78.8, 1376.0], [78.9, 1377.0], [79.0, 1377.0], [79.1, 1377.0], [79.2, 1377.0], [79.3, 1377.0], [79.4, 1377.0], [79.5, 1377.0], [79.6, 1377.0], [79.7, 1377.0], [79.8, 1378.0], [79.9, 1378.0], [80.0, 1378.0], [80.1, 1378.0], [80.2, 1378.0], [80.3, 1378.0], [80.4, 1378.0], [80.5, 1378.0], [80.6, 1378.0], [80.7, 1379.0], [80.8, 1379.0], [80.9, 1379.0], [81.0, 1380.0], [81.1, 1380.0], [81.2, 1380.0], [81.3, 1380.0], [81.4, 1380.0], [81.5, 1380.0], [81.6, 1380.0], [81.7, 1380.0], [81.8, 1380.0], [81.9, 1380.0], [82.0, 1380.0], [82.1, 1380.0], [82.2, 1381.0], [82.3, 1381.0], [82.4, 1381.0], [82.5, 1381.0], [82.6, 1381.0], [82.7, 1381.0], [82.8, 1381.0], [82.9, 1381.0], [83.0, 1382.0], [83.1, 1382.0], [83.2, 1382.0], [83.3, 1382.0], [83.4, 1382.0], [83.5, 1383.0], [83.6, 1383.0], [83.7, 1383.0], [83.8, 1383.0], [83.9, 1383.0], [84.0, 1383.0], [84.1, 1383.0], [84.2, 1383.0], [84.3, 1384.0], [84.4, 1384.0], [84.5, 1384.0], [84.6, 1384.0], [84.7, 1384.0], [84.8, 1384.0], [84.9, 1384.0], [85.0, 1384.0], [85.1, 1385.0], [85.2, 1385.0], [85.3, 1385.0], [85.4, 1385.0], [85.5, 1385.0], [85.6, 1385.0], [85.7, 1385.0], [85.8, 1385.0], [85.9, 1385.0], [86.0, 1385.0], [86.1, 1385.0], [86.2, 1385.0], [86.3, 1386.0], [86.4, 1386.0], [86.5, 1387.0], [86.6, 1387.0], [86.7, 1387.0], [86.8, 1387.0], [86.9, 1387.0], [87.0, 1388.0], [87.1, 1388.0], [87.2, 1388.0], [87.3, 1389.0], [87.4, 1389.0], [87.5, 1389.0], [87.6, 1389.0], [87.7, 1390.0], [87.8, 1390.0], [87.9, 1391.0], [88.0, 1391.0], [88.1, 1391.0], [88.2, 1391.0], [88.3, 1391.0], [88.4, 1391.0], [88.5, 1391.0], [88.6, 1391.0], [88.7, 1392.0], [88.8, 1392.0], [88.9, 1392.0], [89.0, 1392.0], [89.1, 1392.0], [89.2, 1393.0], [89.3, 1393.0], [89.4, 1394.0], [89.5, 1394.0], [89.6, 1394.0], [89.7, 1394.0], [89.8, 1395.0], [89.9, 1396.0], [90.0, 1396.0], [90.1, 1396.0], [90.2, 1397.0], [90.3, 1397.0], [90.4, 1397.0], [90.5, 1397.0], [90.6, 1397.0], [90.7, 1397.0], [90.8, 1398.0], [90.9, 1401.0], [91.0, 1402.0], [91.1, 1403.0], [91.2, 1403.0], [91.3, 1403.0], [91.4, 1404.0], [91.5, 1404.0], [91.6, 1404.0], [91.7, 1406.0], [91.8, 1406.0], [91.9, 1407.0], [92.0, 1407.0], [92.1, 1407.0], [92.2, 1408.0], [92.3, 1408.0], [92.4, 1410.0], [92.5, 1411.0], [92.6, 1412.0], [92.7, 1415.0], [92.8, 1416.0], [92.9, 1416.0], [93.0, 1417.0], [93.1, 1418.0], [93.2, 1419.0], [93.3, 1419.0], [93.4, 1419.0], [93.5, 1422.0], [93.6, 1422.0], [93.7, 1424.0], [93.8, 1426.0], [93.9, 1426.0], [94.0, 1426.0], [94.1, 1428.0], [94.2, 1429.0], [94.3, 1429.0], [94.4, 1431.0], [94.5, 1434.0], [94.6, 1439.0], [94.7, 1442.0], [94.8, 1445.0], [94.9, 1451.0], [95.0, 1452.0], [95.1, 1453.0], [95.2, 1455.0], [95.3, 1456.0], [95.4, 1456.0], [95.5, 1456.0], [95.6, 1473.0], [95.7, 1473.0], [95.8, 1484.0], [95.9, 1485.0], [96.0, 1485.0], [96.1, 1501.0], [96.2, 1507.0], [96.3, 1509.0], [96.4, 1523.0], [96.5, 1531.0], [96.6, 1540.0], [96.7, 1548.0], [96.8, 1575.0], [96.9, 1611.0], [97.0, 1613.0], [97.1, 1635.0], [97.2, 1658.0], [97.3, 1733.0], [97.4, 1754.0], [97.5, 1774.0], [97.6, 1785.0], [97.7, 1811.0], [97.8, 1872.0], [97.9, 1878.0], [98.0, 1879.0], [98.1, 1884.0], [98.2, 1884.0], [98.3, 1887.0], [98.4, 1898.0], [98.5, 1902.0], [98.6, 1944.0], [98.7, 1952.0], [98.8, 1970.0], [98.9, 1982.0], [99.0, 2070.0], [99.1, 2082.0], [99.2, 2099.0], [99.3, 2116.0], [99.4, 2198.0], [99.5, 2344.0], [99.6, 2351.0], [99.7, 2373.0], [99.8, 2387.0], [99.9, 2429.0]], "isOverall": false, "label": "Initialisasi", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 680.0, "series": [{"data": [[0.0, 2.0], [2100.0, 2.0], [2300.0, 4.0], [2400.0, 1.0], [700.0, 17.0], [800.0, 200.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 680.0], [1400.0, 53.0], [1500.0, 8.0], [1600.0, 4.0], [1700.0, 4.0], [1800.0, 8.0], [1900.0, 5.0], [2000.0, 3.0]], "isOverall": false, "label": "Initialisasi", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 959.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 959.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.7049180327868851, "minX": 1.62360816E12, "maxY": 1.9166666666666665, "series": [{"data": [[1.62360828E12, 1.7666666666666666], [1.62360894E12, 1.7333333333333327], [1.62360858E12, 1.8360655737704916], [1.62360888E12, 1.7666666666666666], [1.62360822E12, 1.783333333333333], [1.62360852E12, 1.7666666666666662], [1.62360918E12, 1.7931034482758617], [1.62360912E12, 1.7457627118644068], [1.62360816E12, 1.9166666666666665], [1.62360882E12, 1.819672131147541], [1.62360846E12, 1.8474576271186447], [1.62360876E12, 1.779661016949152], [1.6236084E12, 1.7049180327868851], [1.62360906E12, 1.7704918032786892], [1.6236087E12, 1.8688524590163937], [1.623609E12, 1.7457627118644068], [1.62360834E12, 1.7796610169491525], [1.62360864E12, 1.8305084745762712]], "isOverall": false, "label": "Sharp Games", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360918E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 849.0272727272722, "minX": 1.0, "maxY": 2204.3333333333335, "series": [{"data": [[2.0, 1369.0038759689917], [1.0, 849.0272727272722], [3.0, 2204.3333333333335]], "isOverall": false, "label": "Initialisasi", "isController": false}, {"data": [[1.7859999999999996, 1259.6209999999992]], "isOverall": false, "label": "Initialisasi-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 122.53333333333333, "minX": 1.62360816E12, "maxY": 1033.45, "series": [{"data": [[1.62360828E12, 982.5], [1.62360894E12, 981.7], [1.62360858E12, 997.3666666666667], [1.62360888E12, 1033.45], [1.62360822E12, 980.3666666666667], [1.62360852E12, 981.6333333333333], [1.62360918E12, 477.6166666666667], [1.62360912E12, 970.55], [1.62360816E12, 197.03333333333333], [1.62360882E12, 997.9], [1.62360846E12, 1016.1166666666667], [1.62360876E12, 965.5], [1.6236084E12, 999.1666666666666], [1.62360906E12, 1000.95], [1.6236087E12, 998.5666666666667], [1.623609E12, 965.8], [1.62360834E12, 965.5333333333333], [1.62360864E12, 964.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62360828E12, 610.2], [1.62360894E12, 611.2], [1.62360858E12, 618.95], [1.62360888E12, 598.9833333333333], [1.62360822E12, 610.6666666666666], [1.62360852E12, 608.9333333333333], [1.62360918E12, 294.81666666666666], [1.62360912E12, 600.85], [1.62360816E12, 122.53333333333333], [1.62360882E12, 620.6833333333333], [1.62360846E12, 588.9666666666667], [1.62360876E12, 602.1166666666667], [1.6236084E12, 617.2833333333333], [1.62360906E12, 620.35], [1.6236087E12, 619.35], [1.623609E12, 597.1833333333333], [1.62360834E12, 598.5166666666667], [1.62360864E12, 600.5833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360918E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1216.524590163934, "minX": 1.62360816E12, "maxY": 1343.2499999999998, "series": [{"data": [[1.62360828E12, 1251.25], [1.62360894E12, 1229.9666666666662], [1.62360858E12, 1290.1311475409836], [1.62360888E12, 1230.1166666666668], [1.62360822E12, 1250.1833333333332], [1.62360852E12, 1245.0333333333333], [1.62360918E12, 1255.2068965517242], [1.62360912E12, 1227.0508474576268], [1.62360816E12, 1343.2499999999998], [1.62360882E12, 1271.262295081967], [1.62360846E12, 1304.7118644067796], [1.62360876E12, 1263.8474576271183], [1.6236084E12, 1216.524590163934], [1.62360906E12, 1274.8524590163936], [1.6236087E12, 1298.2950819672137], [1.623609E12, 1233.3050847457625], [1.62360834E12, 1252.5762711864409], [1.62360864E12, 1299.7457627118647]], "isOverall": false, "label": "Initialisasi", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360918E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1215.688524590164, "minX": 1.62360816E12, "maxY": 1342.6666666666667, "series": [{"data": [[1.62360828E12, 1250.5166666666667], [1.62360894E12, 1228.8500000000001], [1.62360858E12, 1289.6393442622946], [1.62360888E12, 1228.9500000000003], [1.62360822E12, 1248.8666666666666], [1.62360852E12, 1244.766666666667], [1.62360918E12, 1254.4827586206898], [1.62360912E12, 1226.1525423728817], [1.62360816E12, 1342.6666666666667], [1.62360882E12, 1270.5245901639344], [1.62360846E12, 1303.4237288135594], [1.62360876E12, 1263.1186440677966], [1.6236084E12, 1215.688524590164], [1.62360906E12, 1274.1475409836066], [1.6236087E12, 1297.540983606558], [1.623609E12, 1232.7118644067796], [1.62360834E12, 1251.8474576271187], [1.62360864E12, 1299.0508474576275]], "isOverall": false, "label": "Initialisasi", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360918E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 395.05000000000007, "minX": 1.62360816E12, "maxY": 430.0833333333333, "series": [{"data": [[1.62360828E12, 403.9833333333334], [1.62360894E12, 415.85000000000014], [1.62360858E12, 401.6393442622951], [1.62360888E12, 395.05000000000007], [1.62360822E12, 400.70000000000005], [1.62360852E12, 405.0333333333334], [1.62360918E12, 398.2068965517241], [1.62360912E12, 400.3389830508473], [1.62360816E12, 430.0833333333333], [1.62360882E12, 403.9180327868853], [1.62360846E12, 399.4237288135594], [1.62360876E12, 423.40677966101686], [1.6236084E12, 420.4754098360656], [1.62360906E12, 421.24590163934437], [1.6236087E12, 422.03278688524597], [1.623609E12, 409.677966101695], [1.62360834E12, 411.7796610169492], [1.62360864E12, 401.271186440678]], "isOverall": false, "label": "Initialisasi", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360918E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 787.0, "minX": 1.62360816E12, "maxY": 2429.0, "series": [{"data": [[1.62360828E12, 1811.0], [1.62360894E12, 2344.0], [1.62360858E12, 1658.0], [1.62360888E12, 1611.0], [1.62360822E12, 1635.0], [1.62360852E12, 1456.0], [1.62360918E12, 1392.0], [1.62360912E12, 1872.0], [1.62360816E12, 1733.0], [1.62360882E12, 1774.0], [1.62360846E12, 2198.0], [1.62360876E12, 1970.0], [1.6236084E12, 2387.0], [1.62360906E12, 2351.0], [1.6236087E12, 2373.0], [1.623609E12, 1884.0], [1.62360834E12, 2429.0], [1.62360864E12, 1902.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62360828E12, 1415.8], [1.62360894E12, 1377.8], [1.62360858E12, 1419.0], [1.62360888E12, 1389.0], [1.62360822E12, 1388.9], [1.62360852E12, 1402.4], [1.62360918E12, 1384.0], [1.62360912E12, 1386.0], [1.62360816E12, 1639.7000000000003], [1.62360882E12, 1408.0], [1.62360846E12, 1640.4000000000003], [1.62360876E12, 1391.0], [1.6236084E12, 1396.0], [1.62360906E12, 1719.2000000000014], [1.6236087E12, 1390.6], [1.623609E12, 1384.0], [1.62360834E12, 1380.0], [1.62360864E12, 1415.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62360828E12, 1811.0], [1.62360894E12, 2344.0], [1.62360858E12, 1658.0], [1.62360888E12, 1611.0], [1.62360822E12, 1635.0], [1.62360852E12, 1456.0], [1.62360918E12, 1392.0], [1.62360912E12, 1872.0], [1.62360816E12, 1733.0], [1.62360882E12, 1774.0], [1.62360846E12, 2198.0], [1.62360876E12, 1970.0], [1.6236084E12, 2387.0], [1.62360906E12, 2351.0], [1.6236087E12, 2373.0], [1.623609E12, 1884.0], [1.62360834E12, 2429.0], [1.62360864E12, 1902.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62360828E12, 1528.0999999999997], [1.62360894E12, 1565.9499999999991], [1.62360858E12, 1451.9], [1.62360888E12, 1401.0], [1.62360822E12, 1452.8999999999996], [1.62360852E12, 1421.3999999999999], [1.62360918E12, 1391.5], [1.62360912E12, 1453.0], [1.62360816E12, 1733.0], [1.62360882E12, 1506.6], [1.62360846E12, 1988.6999999999996], [1.62360876E12, 1396.0], [1.6236084E12, 1424.5], [1.62360906E12, 2058.2], [1.6236087E12, 1452.1], [1.623609E12, 1404.0], [1.62360834E12, 1387.0], [1.62360864E12, 1484.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62360828E12, 794.0], [1.62360894E12, 787.0], [1.62360858E12, 800.0], [1.62360888E12, 803.0], [1.62360822E12, 796.0], [1.62360852E12, 795.0], [1.62360918E12, 790.0], [1.62360912E12, 793.0], [1.62360816E12, 811.0], [1.62360882E12, 794.0], [1.62360846E12, 794.0], [1.62360876E12, 805.0], [1.6236084E12, 797.0], [1.62360906E12, 792.0], [1.6236087E12, 797.0], [1.623609E12, 800.0], [1.62360834E12, 789.0], [1.62360864E12, 800.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62360828E12, 1355.0], [1.62360894E12, 1344.5], [1.62360858E12, 1364.0], [1.62360888E12, 1357.0], [1.62360822E12, 1351.5], [1.62360852E12, 1362.0], [1.62360918E12, 1346.0], [1.62360912E12, 1341.0], [1.62360816E12, 1356.0], [1.62360882E12, 1347.0], [1.62360846E12, 1347.5], [1.62360876E12, 1360.0], [1.6236084E12, 1352.0], [1.62360906E12, 1350.0], [1.6236087E12, 1351.0], [1.623609E12, 1353.0], [1.62360834E12, 1351.0], [1.62360864E12, 1363.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 1398.0, "series": [{"data": [[1.0, 1350.0], [2.0, 1356.0], [3.0, 1398.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 13.0], [3.0, 15.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1398.0, "series": [{"data": [[1.0, 1349.0], [2.0, 1355.0], [3.0, 1398.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.62360816E12, "maxY": 1.0, "series": [{"data": [[1.62360828E12, 1.0], [1.62360894E12, 1.0], [1.62360858E12, 1.0], [1.62360888E12, 1.0], [1.62360822E12, 1.0], [1.62360852E12, 1.0], [1.62360918E12, 0.45], [1.62360912E12, 1.0], [1.62360816E12, 0.21666666666666667], [1.62360882E12, 1.0], [1.62360846E12, 1.0], [1.62360876E12, 1.0], [1.6236084E12, 1.0], [1.62360906E12, 1.0], [1.6236087E12, 1.0], [1.623609E12, 1.0], [1.62360834E12, 1.0], [1.62360864E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360918E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62360816E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360846E12, 0.016666666666666666], [1.62360888E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.62360828E12, 1.0], [1.62360894E12, 1.0], [1.62360858E12, 1.0166666666666666], [1.62360888E12, 0.9833333333333333], [1.62360822E12, 1.0], [1.62360852E12, 1.0], [1.62360918E12, 0.48333333333333334], [1.62360912E12, 0.9833333333333333], [1.62360816E12, 0.2], [1.62360882E12, 1.0166666666666666], [1.62360846E12, 0.9666666666666667], [1.62360876E12, 0.9833333333333333], [1.6236084E12, 1.0166666666666666], [1.62360906E12, 1.0166666666666666], [1.6236087E12, 1.0166666666666666], [1.623609E12, 0.9833333333333333], [1.62360834E12, 0.9833333333333333], [1.62360864E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62360918E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62360816E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360828E12, 1.0], [1.62360894E12, 1.0], [1.62360858E12, 1.0166666666666666], [1.62360888E12, 0.9833333333333333], [1.62360822E12, 1.0], [1.62360852E12, 1.0], [1.62360918E12, 0.48333333333333334], [1.62360912E12, 0.9833333333333333], [1.62360816E12, 0.2], [1.62360882E12, 1.0166666666666666], [1.62360846E12, 0.9666666666666667], [1.62360876E12, 0.9833333333333333], [1.6236084E12, 1.0166666666666666], [1.62360906E12, 1.0166666666666666], [1.6236087E12, 1.0166666666666666], [1.623609E12, 0.9833333333333333], [1.62360834E12, 0.9833333333333333], [1.62360864E12, 0.9833333333333333]], "isOverall": false, "label": "Initialisasi-success", "isController": false}, {"data": [[1.62360846E12, 0.016666666666666666], [1.62360888E12, 0.016666666666666666]], "isOverall": false, "label": "Initialisasi-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360918E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62360816E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.62360828E12, 1.0], [1.62360894E12, 1.0], [1.62360858E12, 1.0166666666666666], [1.62360888E12, 0.9833333333333333], [1.62360822E12, 1.0], [1.62360852E12, 1.0], [1.62360918E12, 0.48333333333333334], [1.62360912E12, 0.9833333333333333], [1.62360816E12, 0.2], [1.62360882E12, 1.0166666666666666], [1.62360846E12, 0.9666666666666667], [1.62360876E12, 0.9833333333333333], [1.6236084E12, 1.0166666666666666], [1.62360906E12, 1.0166666666666666], [1.6236087E12, 1.0166666666666666], [1.623609E12, 0.9833333333333333], [1.62360834E12, 0.9833333333333333], [1.62360864E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62360846E12, 0.016666666666666666], [1.62360888E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62360918E12, "title": "Total Transactions Per Second"}},
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

