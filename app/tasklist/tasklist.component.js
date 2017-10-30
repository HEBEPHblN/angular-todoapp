angular.
	module('taskList').
	component('taskList', {
		templateUrl: 'tasklist/tasklist.template.html',
		controller: ['Tasks', 'taskDoneFilter', function taskListController(Tasks, taskDoneFilter) {

			this.tasks = Tasks.tasks;
			

			this.countUndone = function() {
				return taskDoneFilter(this.tasks, false).length;
			}

			this.countDone = function() {
				return taskDoneFilter(this.tasks, true).length;
			}


			this.taskDone = function(taskId) {

				Tasks.getTask(taskId).done = true;
				
			}

			this.taskUndone = function(taskId) {

				Tasks.getTask(taskId).done = false;
				
			}

			
		}]
	});