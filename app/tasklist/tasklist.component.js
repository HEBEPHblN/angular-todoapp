angular.
	module('taskList').
	component('taskList', {
		templateUrl: 'tasklist/tasklist.template.html',
		controller: ['Tasks', '$filter', function taskListController(Tasks, $filter) {

			this.tasks = Tasks.tasks;
			
			

			this.taskDone = function(taskId) {

				Tasks.getTasks({id: taskId})[0].done = true;
				
			}

			this.countTasks = function() {
				return $filter('filter')(Tasks.tasks,{done: false}).length;
			}

			
		}]
	});