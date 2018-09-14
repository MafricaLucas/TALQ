app.controller("home_controller", function($scope, $rootScope, $location, $http, $timeout, $routeParams, $window) {

  $scope.signUpStep = 0;
  $scope.user = {
    first_name: null,
    last_name: null,
    mail: null,
    language: null,
    gender: null,
    birthday: null,
    day: null,
    month: null,
    year: null,
  }
  $rootScope.header=false;
  $scope.connexion = function(){
    console.log($scope.user);
  }
});
