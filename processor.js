var exports = module.exports;
var req = require("request");
exports.remove_info = function(stockName, startDate) {
    var apiAdress = "http://marketdata.websol.barchart.com/getHistory.json?key=f1be74272a4e99a0f081bc5cd55d7a42&symbol=" + stockName + "&type=daily&startDate=" + startDate + "000000";
    req(apiAdress, function(error, response, body){
        var json = JSON.parse(body);
        var results = json.results;
        var returnList = [];
        for (var i = 0; i < results.length; i++) {
            var current = results[i];
            var obj = {"tradingDay":current.tradingDay, "high":current.high};
            returnList.push(obj);
        }
        return returnList;
    });
}
