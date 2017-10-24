angular.
	module('core.tasks').factory('Tasks', ['$filter', function($filter) {
	return {
		tasksCount: 0,
		tasks: [],
		addTask: function(taskHeading) {
			var that = this;
			that.tasks.push({
					title: taskHeading,
					done: false,
					id: that.tasksCount++
				});
		},
		getTasks: function(queryObject) {
			var that = this;
			return $filter('filter')(this.tasks, queryObject);
		}
	}
}]);