angular.
	module('taskDetail').
	component('taskDetail', {
		templateUrl: 'task-detail/task-detail.template.html',
		controller: ['Tasks', '$routeParams', function taskDetailController(Tasks, $routeParams) {

			this.taskId = $routeParams.taskId;

			this.taskObject = Tasks.getTasks({id: $routeParams.taskId})[0];

		}]
	});