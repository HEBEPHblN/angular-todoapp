describe('taskList', function() {

  // Load the module that contains the `taskList` component before each test

  beforeEach(module('taskList'));

  // Test the controller
  describe('taskListController', function() {

    var Tasks, ctrl;

    beforeEach(inject(function($componentController, _Tasks_) {
      Tasks = _Tasks_;
      ctrl = $componentController('taskList');
    }));

    it('taskDone() - should use Task service and mark requested task as done', function() {
      
      Tasks.addTask('Task 1');

      ctrl.taskDone(0);

      expect(Tasks.getTasks({id: 0})[0].done).toBe(true);

    });

    it('countTasks() - should use Task service and mark requested task as done', function() {
      
      Tasks.addTask('Task 1');

      ctrl.taskDone(0);

      expect(Tasks.getTasks({id: 0})[0].done).toBe(true);

    });


  });

});