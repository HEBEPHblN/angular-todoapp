angular.
	module('menu').
	component('menuTabs', {
		templateUrl: 'menu/menu.template.html',
		controller: ['$location', function menuController($location) {

			this.activeClass = function(path) {
				return (path === $location.path().substr(0, path.length)) ? 'active' : '';
			}


		}]
	});