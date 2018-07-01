app.controller('addEmployeeController', function ($scope,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place
    init();
    function init() {
       
    };
    $scope.submit = function(){
    	var employeeDtlsInpt = {
            "id": $scope.idInput,
            "name": $scope.nameInput,
            "phone": $scope.phoneInput,
            "address": {
                "city": $scope.cityInput,
                "address_line1": $scope.address1Input,
                "address_line2": $scope.address2Input,
                "postal_code": $scope.pstCodeInput
            }
        };
        $rootScope.$emit("employeeDetails", employeeDtlsInpt);
    }
    
});

