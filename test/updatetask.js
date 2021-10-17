
const assert = require('assert');
const task = require('../models/tasks');


describe('Updating false to true',function(){

	it('Updating Task-2 false to true',function(done){
		task.findOneAndUpdate({Completed:'false'},{Completed:'true'}).then(function(){
			task.findOne({Description:"Task-2"}).then(function(t2){
				assert(t2.Completed === "true");
				done();
			});
		}).catch(done);
	});
	it('Updating Task-4 false to true',function(done){
		task.findOneAndUpdate({Completed:'false'},{Completed:'true'}).then(function(){
			task.findOne({Description:"Task-4"}).then(function(t4){
				assert(t4.Completed === "true");
				done();
			});
		}).catch(done);
	});
});