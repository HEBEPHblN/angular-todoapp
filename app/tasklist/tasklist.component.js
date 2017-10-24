angular.
	module('taskList').
	component('taskList', {
		templateUrl: 'tasklist/tasklist.template.html',
		controller: ['Tasks', '$filter', function taskListController(Tasks, $filter) {

			this.tasks = Tasks.tasks;
			

			this.countTasks = function() {
				return Tasks.getTasks({done:false}).length;
			}


			this.taskDone = function(taskId) {

				Tasks.getTasks({id: taskId})[0].done = true;
				
			}

			
		}]
	});