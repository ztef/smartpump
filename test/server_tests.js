var expect  = require('chai').expect;
var request = require('request');


require('chai').should();

describe('SERVER TESTS', function() {
  
	it('Server Active', function(done) {
    	request('http://localhost:5000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    	});
	});


	it('Server Status', function(done) {
    		request('http://localhost:5000' , function(error, response, body) {
        	expect(body).to.eql("SERVER_STATE_RUNNING");
            done();
    	});
	});

})

