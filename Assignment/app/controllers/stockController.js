
app.controller('stockController', function ($scope, stocklistService, $rootScope, $http) {

    init();

    function init() {
        $("body").removeClass("bodyImg");
        $http.get('http://10.117.189.89:8080/stocks').success(function (response) {
            $scope.itemDetails = response.stockDetails;
            $scope.itemLength = $scope.itemDetails.length;
        });
        $("body").addClass("stockDtlsColor");
        //$scope.itemDetails = stocklistService.getstocklist();
    };

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place

    $scope.buyStock = function (item_selected) {
        $scope.message = "";
        $scope.currentItem = item_selected;
        $('#buyStockModal').modal('show')
    };

    $scope.GetQuote = function (item_selected) {
        $scope.item = item_selected;
        $('#getQuoteModal').modal('show')
    };

    $scope.purchaseOrder = function (currentItem) {
        $scope.message = "";
        var requestObj = {
            "userId": "1",
            "stockId": currentItem.stockId,
            "price": currentItem.price,
            "quantity": currentItem.quantity,
            "userName": "Arun",
            "orderId": ""
        };

        $http.post('http://10.117.189.89:8080/review', requestObj).success(function (response) {
            $scope.message = "Order Purchase Successfully";
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.message = "Order Failed";
        });;
        // $http.post('http://10.117.189.89:8080/order', requestObj).success(function (response) {
        //     if (response.status == 200) {
        //         $scope.message = "Order Purchase Successfully";
        //     }
        //     else {
        //         $scope.message = "Order Failed";
        //     }
        // });

        // $('#buyStockModal').modal('hide')
    };


});

