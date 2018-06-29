//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('userNamesList', function () {
    this.getUserList = function () {
        return listOfUser;
    };


 
    var listOfUser =[  
     {"username" : "Arun","userId" : "1"},
     {"username" : "Abhishek","userId" : "2"},
     {"username" : "Abhinav","userId" : "3"},
     {"username" : "Ram","userId" : "4"},
     {"username" : "Sham","userId" : "5"}
   ];

});

app.service('countryList', function () {
    this.getCountryList = function () {
        return listOfCountry;
    };
 
    var listOfCountry =[  
     {"country" : "India"},
     {"country" : "UK"},
     {"country" : "USA"}
   ];

});