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

      expect(Tasks.getTask(0).done).toBe(true);

    });

    it('countDone() - should count done tasks', function() {
      
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');

      ctrl.taskDone(1);
      ctrl.taskDone(2);
      ctrl.taskDone(3);

      expect(ctrl.countDone()).toBe(3);

    });

    it('taskUndone() - should use Task service and mark requested task as undone', function() {

      Tasks.addTask('Task 1');

      ctrl.taskUndone(0);

      expect(Tasks.getTask(0).done).toBe(false);

    });

    it('countUndone() - should count undone tasks', function() {
      
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');
      Tasks.addTask('Task 1');

      ctrl.taskDone(1);
     

      expect(ctrl.countUndone()).toBe(3);

    });

  });

});