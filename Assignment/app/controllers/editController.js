app.controller('editController', function ($scope,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place
    init();
    function init() {
        $rootScope.initSize = "Select";
    };
    $rootScope.$on("EditPageDetails", function(event,itemSelAllDetail){
        $scope.showDetails(itemSelAllDetail);
    });
    $scope.showDetails = function(itemSelDetail){
        $scope.itemToShow = itemSelDetail;
    };
    $scope.sizeSelect = function(seleVal){
        $rootScope.initSize = seleVal;
    };
    $scope.editItem = function(itemToEdit){
        var editDetial = [];
        editDetial.push({
            "itemToEdit" : itemToEdit,
            "sizeEdit" : $rootScope.initSize
        });
        $rootScope.$emit("EditItemDetails", editDetial);
    };
    $scope.closePopup = function(){
       $rootScope.editHideShow = false;
       $rootScope.initSize = "Select";
    };
});

