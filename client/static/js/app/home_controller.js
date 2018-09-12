app.controller("home_controller", function($scope, $rootScope, $location, $http, $timeout, $routeParams, $window) {


  $rootScope.header=false;
  $scope.bonjour = function(){
    console.log('reussi');
  }
});
