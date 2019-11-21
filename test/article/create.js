const expect = require("chai").expect;
const app = require("../../app");
const request = require('supertest');
const url = '/v1/articles';
const mockData = require('../utils/articleDummy');
const db = require('../../database');
let token;
const { emptyData, validData } = mockData.articles;

const userCredentials = {
  email: 'admin@example.com', 
  password: '123456'
}

before(function(done){
  request(app)
    .post('/v1/auth/signin')
    .send(userCredentials)
    .end(function(err, response){
       // console.log(response)
       token = 'Bearer ' + response.body.data.token
      expect(response.statusCode).to.equal(200);
      done();
    });
});

describe('Try to submit empty form', () => {
	it('it should return response status 422', (done) => {
		request(app).post(url)
			.send({...emptyData})
			.set('accept', 'application/json')
			.set('Authorization', token)
			.end((err, res) => {
				expect(res.statusCode).to.equal(422);
				expect(res.body).to.include.keys('error');
        done();
			})
	});
});

describe('Try to submit valid form', () => {
	it('it should return response status 201', (done) => {
		request(app).post(url)
			.send({...validData})
			.set('accept', 'application/json')
			.set('Authorization', token)
			.end((err, res) => {
				console.log(res.body)
				expect(res.statusCode).to.equal(201);
				expect(res.body).to.include.keys('data');
        done();
			})
	});
});