describe('menu', function() {

  // Load the module that contains the `addTask` component before each test

  beforeEach(module('menu'));

  describe('menuController', function() {
    var ctrl, Tasks;

    beforeEach(inject(function($componentController, $location, _Tasks_) {
      Tasks = _Tasks_;
      ctrl = $componentController('menuTabs');
      $location.path('/addTask/otherspath?test=1');
    }));

    it('activeClass(path) should return active class if paths of the function and $location service are equal', function() {


      expect(ctrl.activeClass("/addTask")).toBe('active');

    });

    it('countTasks() should count all tasks amount', function() {

      Tasks.addTask('Task');
      Tasks.addTask('Task');
      Tasks.addTask('Task');

      expect(ctrl.tasksCount()).toBe(3);

    });

  }); 

});