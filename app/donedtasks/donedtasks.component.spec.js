describe('donedTasks', function() {

  // Load the module that contains the `donedTasks` component before each test

  beforeEach(module('donedTasks'));

  // Test the controller
  describe('donedTasksController', function() {

  	var Tasks, ctrl;

  	beforeEach(inject(function($componentController, _Tasks_) {
      Tasks = _Tasks_;
      ctrl = $componentController('donedTasks');
    }));

    it('taskUndone() - should use Task service and mark requested task as undone', function() {

      Tasks.addTask('Task 1');

      ctrl.taskUndone(0);

      expect(Tasks.getTasks({id: 0})[0].done).toBe(false);

    });


  });

});