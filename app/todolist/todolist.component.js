angular.
	module('todoList').
	component('todolist', {
		templateUrl: 'todolist/todolist.template.html',
		controller: function AppListController() {
			this.todolist = [];
			this.donelist = [];

			this.todoCount = this.todolist.length;
			this.doneCount = this.donelist.length;
		}
	});