let MyPlayListApp = angular.module('myPlayList', ['ngRoute', 'ngAnimate']);

MyPlayListApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

  // $locationProvider.html6Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'PlaylistController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'PlaylistController'
    })
    .otherwise ({
      redirectTo: '/home'
    });

}]);

MyPlayListApp.directive('randomSong',[function() {
  return {
    restrict: 'E',
    scope: {
      todolists: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 2);
    }
  }
}])

MyPlayListApp.controller('PlaylistController',["$scope", "$http", function($scope, $http) {
  $scope.message = "Hello AngularJS";

  $scope.removePlayList = function(playlist) {
    let removePlayList = $scope.todolists.indexOf(playlist);
    $scope.todolists.splice(removePlayList, 1);
    console.log($scope.todolists)
  };

  $scope.addSong = function() {
    // console.log($scope);
    $scope.todolists.push({
      name: $scope.newSong.name,
      number: parseInt($scope.newSong.number),
      working: true
    });

    $scope.newSong.name = "";
    $scope.newSong.number = "";
  };

  $scope.removeAll = function() {
    $scope.todolists = [];
  };

  $http.get('data/playlists.json')
    .then(function(data) {
      $scope.todolists = data.data;
    });

}]);