let MyPlayListApp = angular.module('myPlayList', []);

MyPlayListApp.controller('PlaylistController',["$scope", function($scope) {
  $scope.message = "Hello AngularJS";

  $scope.removePlayList = function(playlist) {
    let removePlayList = $scope.playlists.indexOf(playlist);
    $scope.playlists.splice(removePlayList, 1);
    console.log($scope.playlists)
  };

  $scope.playlists = [
    {
      name: "First-song",
      artist: "Fhun",
      number: 1,
      playable: true
    },
    {
      name: "Second-song",
      artist: "Shen",
      number: 2,
      playable: true
    },
    {
      name: "Third-song",
      artist: "Tom",
      number: 3,
      playable: false
    },
    {
      name: "Forth-song",
      artist: "Funky guy",
      number: 4,
      playable: true
    }
  ];

}]);