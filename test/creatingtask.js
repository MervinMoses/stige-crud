
const assert = require('assert');
const task = require('../models/tasks');

describe('Creating and Saving Tasks',function(){
	var task1 = new task({
		Description: "Task-1",
		Completed: "true"
	});
	var task2 = new task({
		Description: "Task-2",
		Completed: "false"
	});
	var task3 = new task({
		Description: "Task-3",
		Completed: "true"
	});
	var task4 = new task({
		Description: "Task-4",
		Completed: "false"
	});

	it('Saving Task-1',function(){
		
		task1.save().then(function(done){
			assert(task1.isNew === false);
			done();
		});
	});
	it('Saving Task-2',function(){
		task2.save().then(function(done){
			assert(task2.isNew === false);
			done();
		});
	});
	it('Saving Task-3',function(){
		task3.save().then(function(done){
			assert(task3.isNew === false);
			done();
		});
	});
	it('Saving Task-4',function(){
		task4.save().then(function(done){
			assert(task4.isNew === false);
			done();
		});
	});
});