describe('taskDetail', function() {

  // Load the module that contains the `addTask` component before each test

  beforeEach(module('taskDetail'));

  // Test the controller
  describe('taskDetailController', function() {

  	var Tasks, ctrl;

  	beforeEach(inject(function($componentController, _Tasks_) {
      Tasks = _Tasks_;
      ctrl = $componentController('taskDetail');
    }));

    /*it('newTaskAdd() - should use Task service and clear input field after that', function() {
      

      ctrl.newTaskTitle = 'Testing headline for task';
      ctrl.newTaskAdd();
      expect(ctrl.newTaskTitle).toBe('');

    });*/


  });

});