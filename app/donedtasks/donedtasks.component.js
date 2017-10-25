angular.
	module('donedTasks').
	component('donedTasks', {
		templateUrl: 'donedtasks/donedtasks.template.html',
		controller: ['Tasks', '$filter', function donedTasksController(Tasks, $filter) {

			this.tasks = Tasks.tasks;
			
			this.countTasks = function() {
				return Tasks.getTasks({done:true}).length;
			}


			this.taskUndone = function(taskId) {

				Tasks.getTasks({id: taskId})[0].done = false;
				
			}
			
		}]
	});