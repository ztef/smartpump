var expect = require('chai').expect;
var request = require('supertest');
var uri = 'localhost:3000';

describe('Profile',function(){

    it('Should return a users profile',function(done){
        request
            .get(uri + '/api/get_user')
            .query({app_id:'12345'})
            .end(function(err,res){

                var body = res.body;

                expect(body.first_name).to.equal('Bob');
                expect(body.last_name).to.equal('Smith');
                done()
            });
    });
});
