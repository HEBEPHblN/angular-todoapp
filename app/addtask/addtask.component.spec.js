describe('addTask', function() {

  // Load the module that contains the `addTask` component before each test

  beforeEach(module('addTask'));

  // Test the controller
  describe('addTaskController', function() {

  	var Tasks, ctrl;

  	beforeEach(inject(function($componentController, _Tasks_) {
      Tasks = _Tasks_;
      ctrl = $componentController('addTask');
    }));

    it('newTaskAdd() - should add task object to Tasks services array and clear input field', function() {
      

      ctrl.newTaskTitle = 'Testing headline for task';
      ctrl.newTaskAdd();

      expect(Tasks.tasks[0].title).toBe('Testing headline for task');
      expect(ctrl.newTaskTitle).toBe('');

    });


  });

});