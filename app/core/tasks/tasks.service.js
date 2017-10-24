angular.
	module('core.tasks').factory('Tasks', function() {
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
		}
	}
});