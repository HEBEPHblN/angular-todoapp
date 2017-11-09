angular.
	module('menu').
	component('menuTabs', {
		templateUrl: 'menu/menu.template.html',
		controller: ['$location', 'Tasks', function menuController($location, Tasks) {

			this.activeClass = function(path) {
				return (path === $location.path().substr(0, path.length)) ? 'active' : '';
			}


			this.tasksCount = function() {
				return Tasks.tasks.length;
			}


		}]
	});