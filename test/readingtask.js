
const assert = require('assert');
const task = require('../models/tasks');

describe('Reading tasks marked false',function(){
	it('Reading incomplete tasks',function(){
		task.find({Completed:'false'}).then(function(result){
			console.log(result);
			done();
		});
	})
});