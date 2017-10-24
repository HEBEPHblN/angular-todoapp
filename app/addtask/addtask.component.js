angular.
	module('addTask').
	component('addTask', {
		templateUrl: 'addtask/addtask.template.html',
		controller: ['Tasks', function addTaskController(Tasks) {

			this.newTaskAdd = function() {

				Tasks.addTask(this.newTaskTitle);
				this.newTaskTitle = '';
			}

		}]
	});