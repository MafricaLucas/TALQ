/**
* Constants
**/


//var API_URL = 'https://www.waow.eu/api/';
//var UPLOADS_URL = 'https://www.waow.eu/';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

  /** Routing */

  $routeProvider.when('/', {
    templateUrl: 'static/tpl/home.html',
    controller: 'home_controller'
  }).when('/conv', {
    templateUrl: 'static/tpl/conv.html',
    controller: 'home_controller'
  }).otherwise({
    templateUrl: 'static/tpl/error.html',
    controller: 'home_controller',
    doNotTrack: true
  });


});

app.run(function($rootScope, $http, $location, $route, $timeout, $interval, $window) {


  $rootScope.variable = "test";
  $rootScope.bool = true;



  $rootScope.testHome = function() {
    $rootScope.bool = false;
  }



});


app.directive('wHref', function() {
  return {
    restrict: 'A',
    scope: {
      url: '@wHref'
    }, link: function(scope, element, attrs) {
      scope.$watch('url', function(n,o) {
        element[0].href = ('#!' + n);
      });
    }
  }
});
