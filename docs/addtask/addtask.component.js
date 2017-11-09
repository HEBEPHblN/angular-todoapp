angular.
	module('addTask').
	component('addTask', {
		templateUrl: 'addtask/addtask.template.html',
		controller: ['Tasks', function addTaskController(Tasks) {


			var that = this;
			
			this.newTaskAdd = function(form) {

				if(form.$valid) {
					Tasks.addTask(that.newTaskTitle);
					that.newTaskTitle = '';
					
					form.$setPristine();
					form.tasktitle.$setUntouched();
				}
				
				
			}



		}]
	});