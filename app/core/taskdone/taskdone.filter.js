angular.
module('core').
filter('taskDone', ['$filter', function($filter) {
	return function(inputArray, type) {
		return $filter('filter')(inputArray, {done: type});
	}
}]);
