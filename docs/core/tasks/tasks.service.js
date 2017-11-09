angular.
	module('core.tasks').factory('Tasks', ['$filter', function($filter) {
	return {
		tasksCount: 0,
		tasks: [],
		addTask: function(taskHeading) {
			var that = this;
			that.tasks.push({
					title: taskHeading,
					desc: 'There is description of the task..',
					done: false,
					id: that.tasksCount++
				});
		},
		getTask: function(id) {
			var that = this;
			return $filter('filter')(this.tasks, {id: id})[0];
		}
	}
}]);