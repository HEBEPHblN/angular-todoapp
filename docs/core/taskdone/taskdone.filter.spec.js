describe('taskDoneFilter', function() {

  // Load the module that contains the Tasks service before each test
  beforeEach(module('core'));


  it('return new array with requested tasks only', inject(function(taskDoneFilter) {
  	
  		var inputArr = [
  			{done: true},
  			{done: true},
  			{done: true},
  			{done: true},
  			{done: false},
  			{done: false}
  		]

  		expect(taskDoneFilter(inputArr, true).length).toBe(4);
  		expect(taskDoneFilter(inputArr, false).length).toBe(2);

  }));


});