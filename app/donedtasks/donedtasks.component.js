angular.
	module('donedTasks').
	component('donedTasks', {
		templateUrl: 'donedtasks/donedtasks.template.html',
		controller: ['Tasks', '$filter', function taskListController(Tasks, $filter) {

			this.tasks = Tasks.tasks;
			
			

			this.taskUndone = function(taskId) {
				$filter('filter')(Tasks.tasks,{id: taskId})[0].done = false;
			}

			this.countTasks = function() {
				return $filter('filter')(Tasks.tasks,{done: true}).length;
			}

			
		}]
	});