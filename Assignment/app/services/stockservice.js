//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('stocklistService', function () {
    this.getstocklist = function () {
        return stocklist;
    };



    var stocklist = [{
        "stockId": "1",
        "stockName": "ABC",
        "stockType": "NSE",
        "price": "1500",
        "info": "hjjfd",
        "units": "20"
    }

    ];

});