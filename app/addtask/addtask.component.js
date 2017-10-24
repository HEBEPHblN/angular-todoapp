angular.
	module('addTask').
	component('addTask', {
		templateUrl: 'addtask/addtask.template.html',
		controller: ['Tasks', function addTaskController(Tasks) {

			this.newTaskAdd = function() {

				Tasks.tasks.push({
					title: this.newTaskTitle,
					done: false,
					id: Tasks.tasksCount++
				});
				this.newTaskTitle = '';
			}

		}]
	});