
const assert = require('assert');
const task = require('../models/tasks');
describe('Deleting tasks',function(){
	it('Reading incomplete tasks',function(done){
		task.find({Description:'Task-3'}).then(function(record){
			task.deleteOne({_id:record._id}).then(function(){
				task.findOne({_id:record._id}).then(function(result){
					assert(result===null);
					done();
				});
			})
		});
	})
});