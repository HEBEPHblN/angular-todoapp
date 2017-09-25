angular.
	module('todoList').
	component('todolist', {
		templateUrl: 'todolist/todolist.template.html',
		controller: function AppListController() {
			this.todolist = [];
			this.donelist = [];


			this.newTaskAdd = function() {
				this.todolist.push({
					title: this.newTaskTitle,
					done: false
				});
				this.todoCount = this.todolist.length;
				this.newTaskTitle = '';
			}

			this.taskDone = function(taskIndex) {
				this.donelist.push(this.todolist[taskIndex]);
				this.todolist.splice(taskIndex, 1);
			}

			this.taskUndone = function(taskIndex) {
				this.todolist.push(this.donelist[taskIndex]);
				this.donelist.splice(taskIndex, 1);
			}
		}
	});