let MyPlayListApp = angular.module('myPlayList', []);

MyPlayListApp.controller('PlaylistController',["$scope", function($scope) {
  $scope.message = "Hello AngularJS";

  $scope.playlists = [
    {
      name: "First-song",
      artist: "Fhun",
      number: 1,
    },
    {
      name: "Second-song",
      artist: "Shen",
      number: 2,
    },
    {
      name: "Third-song",
      artist: "Tom",
      number: 3,
    },
    {
      name: "Forth-song",
      artist: "Funky guy",
      number: 4,
    }
  ];
}]);