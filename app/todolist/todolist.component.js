angular.
	module('todoList').
	component('todolist', {
		templateUrl: 'todolist/todolist.template.html',
		controller: function AppListController() {
			this.todolist = [];
			this.donelist = [];

			
			this.doneCount = this.donelist.length;

			this.newTaskAdd = function () {
				this.todolist.push({
					title: this.newTaskTitle,
					done: false
				});
				this.todoCount = this.todolist.length;
				this.newTaskTitle = '';
			}
		}
	});