describe('menu', function() {

  // Load the module that contains the `addTask` component before each test

  beforeEach(module('menu'));

  describe('menuController', function() {
    var ctrl;

    beforeEach(inject(function($componentController, $location) {
      ctrl = $componentController('menuTabs');
      $location.path('/addTask/otherspath?test=1');
    }));

    it('activeClass(path) should return active class if paths of the function and $location service are equal', function() {


      expect(ctrl.activeClass("/addTask")).toBe('active');

    });

  }); 

});