
app.controller('homeController', function ($scope,userNamesList,countryList,$rootScope) {

    //I like to have an init() for controllers that need to perform some initialization. 
    // Keeps things in one place
    init();

    function init() {
       
       $scope.sortType     = 'name'; // set the default sort type
       $scope.sortReverse  = false;  // set the default sort order
       $scope.searchFish   = '';     // set the default search/filter term
       
       // create the list of sushi rolls 
       $scope.empData = [{
            "id": 1,
            "name": "Jhon",
            "phone": "9999999999",
            "address": {
                "city": "Pune",
                "address_line1": "ABC road",
                "address_line2": "XYZ building",
                "postal_code": "12455"
            }
        }, {
            "id": 2,
            "name": "Jacob",
            "phone": "AZ99A99PQ9",
            "address": {
                "city": "Pune",
                "address_line1": "PQR road",
                "address_line2": "ABC building",
                "postal_code": "13455"
            }
        }, {
            "id": 3,
            "name": "Ari",
            "phone": "Pune",
            "address": {
                "city": "Mumbai",
                "address_line1": "ABC road",
                "address_line2": "XYZ building",
                "postal_code": "12455"
            }
        }];

    };
});
app.filter('myTableFilter', function(){
  // Just add arguments to your HTML separated by :
  // And add them as parameters here, for example:
  // return function(dataArray, searchTerm, argumentTwo, argumentThree) {
  return function(dataArray, searchTerm) {
      // If no array is given, exit.
      if (!dataArray) {
          return;
      }
      // If no search term exists, return the array unfiltered.
      else if (!searchTerm) {
        var originalData = dataArray;
        var manipulatedData = [];
        
          return dataArray;
      }
      // Otherwise, continue.
      else {
           // Convert filter text to lower case.
           var term = searchTerm.toLowerCase();
           // Return the array and filter it by looking for any occurrences of the search term in each items id or name. 
           return dataArray.filter(function(data){
              var termInId = data.address.city.toLowerCase().indexOf(term) > -1;
              var termInName = data.name.toLowerCase().indexOf(term) > -1;
              return termInId || termInName;
           });
      }
  }    
});

