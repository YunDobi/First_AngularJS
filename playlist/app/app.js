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
      playlists: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 4);
    }
  }
}])

MyPlayListApp.controller('PlaylistController',["$scope", "$http", function($scope, $http) {
  $scope.message = "Hello AngularJS";

  $scope.removePlayList = function(playlist) {
    let removePlayList = $scope.playlists.indexOf(playlist);
    $scope.playlists.splice(removePlayList, 1);
    console.log($scope.playlists)
  };

  $scope.addSong = function() {
    // console.log($scope);
    $scope.playlists.push({
      name: $scope.newSong.name,
      artist: $scope.newSong.artist,
      number: parseInt($scope.newSong.number),
      playable: true
    });

    $scope.newSong.name = "";
    $scope.newSong.artist = "";
    $scope.newSong.number = "";
  };

  $scope.removeAll = function() {
    $scope.playlists = [];
  };

  $http.get('data/playlists.json')
    .then(function(data) {
      $scope.playlists = data.data;
    });

}]);