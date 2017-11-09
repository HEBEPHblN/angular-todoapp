describe('Tasks', function() {

  // Load the module that contains the Tasks service before each test
  beforeEach(module('core.tasks'));

  //Inject and initialize the Task service
  var Tasks;

  beforeEach(inject(function(_Tasks_) {
    Tasks = _Tasks_;
  }));


  // Test the method
  describe('addTask() method', function() {

    it('should add task object to tasks array', function() {

      Tasks.addTask('Title of the task');

      expect(Tasks.tasks[0].title).toBe('Title of the task');
      expect(Tasks.tasks[0].done).toBe(false);

    });


    it('should increment tasksCount after the each new task', function() {

      Tasks.addTask('Task 1');
      expect(Tasks.tasks.length).toBe(1);
      expect(Tasks.tasksCount).toBe(1);

      Tasks.addTask('Task 2');
      expect(Tasks.tasks.length).toBe(2);
      expect(Tasks.tasksCount).toBe(2);

      Tasks.addTask('Task 3');
      expect(Tasks.tasks.length).toBe(3);
      expect(Tasks.tasksCount).toBe(3);

    });


  });

  // Test the method
  describe('getTask() method', function() {

    //The method is based on proprietary service of Angular - $filter, so I just test if my syntax is correct
    it('should get task object by id', function() {

      Tasks.addTask('Task 1');
      Tasks.addTask('Task 2');

      
      expect(Tasks.getTask(0).id).toBe(0);

    });


  });

});