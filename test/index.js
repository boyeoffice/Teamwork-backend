const expect = require("chai").expect;
const app = require("../app");
const request = require('supertest');

describe('Test server /index', () => {
	it('should return response status 200', (done) => {
		request(app).get('/')
			.then((res) => {
				expect(res.statusCode).to.equal(200);
				expect(res.body).to.include.keys('message');
				 expect(res.body.message).to.equal('Welcome to teamwork project');
				 done()
			})
			.catch((err) => console.log(err))
	});
});