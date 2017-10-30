angular.
  module('todoApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/addtask', {
          template: '<add-task></add-task>'
        }).
        when('/tasklist', {
          template: '<task-list></task-list>'
        }).
        when('/tasksearch', {
          template: '<task-search></task-search>'
        }).
        when('/tasklist/:taskId', {
          template: '<task-detail></task-detail>'
        }).
        otherwise('/addtask');
    }
  ]);