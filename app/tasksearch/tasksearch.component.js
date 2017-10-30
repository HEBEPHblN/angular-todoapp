angular.
	module('taskSearch').
	component('taskSearch', {
		templateUrl: 'tasksearch/tasksearch.template.html',
		controller: ['Tasks', '$filter' , function taskSearchController(Tasks, $filter) {

			var that = this;

			this.tasks = Tasks.tasks;

			this.queryCount = function() {
				return $filter('filter')(that.tasks, that.query).length;
			};


		}]
	});