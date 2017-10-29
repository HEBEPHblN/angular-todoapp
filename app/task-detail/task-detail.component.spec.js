describe('taskDetail', function() {

  // Load the module that contains the `addTask` component before each test

  beforeEach(module('taskDetail'));

  // Test the controller
  describe('taskDetailController', function() {

  	var Tasks, ctrl, $routeParams;

  	beforeEach(inject(function($componentController, _Tasks_, _$routeParams_) {
      Tasks = _Tasks_;
      $routeParams = _$routeParams_;
      Tasks.addTask('Title of the task');
      $routeParams.taskId = 0;
      ctrl = $componentController('taskDetail');
    }));

    it('descSave() - should equate desc string from parameters to current task in Tasks service', function() {
      ctrl.task.desc = "description"
      ctrl.descSave();
      expect(Tasks.getTasks({id: $routeParams.taskId})[0].desc).toBe('description');
    });


  });

});