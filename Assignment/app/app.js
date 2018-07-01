/*#######################################################################
  
  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('employeeApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home',
            {
                controller: 'homeController',
                templateUrl: '/app/partials/homePage.html'
            }) 
          .when('/add',
              {
                  controller: 'addEmployeeController',
                  templateUrl: '/app/partials/addEmployeePage.html'
              }) 
        .when('/',
            {
                controller: 'homeController',
                templateUrl: '/app/partials/homePage.html'
            }) 
        .otherwise({ redirectTo: '/' });
});




