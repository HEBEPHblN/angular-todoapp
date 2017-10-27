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
        when('/donedtasks', {
          template: '<doned-tasks></doned-tasks>'
        }).
        otherwise('/addtask');
    }
  ]);