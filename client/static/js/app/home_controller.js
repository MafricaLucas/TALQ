app.controller("home_controller", function($scope, $rootScope, $location, $http, $timeout, $routeParams, $window) {

  $scope.signUpStep = 0;
  $scope.user = {
    first_name: '',
    last_name: '',
    mail: '',
    language: null,
    gender: null,
    birthday: null,
    day: '',
    month: '',
    year: '',
    password: null,
  }
  $rootScope.header=false;
  $scope.connexion = function(){
    console.log($scope.user);
  }
  $scope.inscription = function(){
    console.log($scope.user);
  }
});
