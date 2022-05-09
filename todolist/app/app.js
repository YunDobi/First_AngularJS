let todoListapp = angular.module('todolsits', []);

todoListapp.controller('todolistController', ['$scope', function($scope) {
  $scope.todos = ['first todo'];

  $scope.addingTask = function(task) {
    $scope.todos.push(task);
  };
}]);