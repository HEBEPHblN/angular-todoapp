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

    it('newTaskAdd() - should add task object to tasksArray.tasks services array', function() {
      

      ctrl.newTaskTitle = 'test';
      ctrl.newTaskAdd();

      expect(Tasks.tasks.length).toBe(1);
    });


  });

});