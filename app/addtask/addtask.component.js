angular.
	module('addTask').
	component('addTask', {
		templateUrl: 'addtask/addtask.template.html',
		controller: ['Tasks', function addTaskController(Tasks) {

			this.newTaskAdd = function(form) {

				if(form.$valid) {
					Tasks.addTask(this.newTaskTitle);
					this.newTaskTitle = '';
					
					form.$setPristine();
					form.tasktitle.$setUntouched();
				}
				
				
			}



		}]
	});