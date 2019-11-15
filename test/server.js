const expect = require("chai").expect;
const app = require("../app");
const request = require('supertest');

describe('Test server /index', () => {
	it('should return response status 200', () => {
		request(app).get('/')
			.then((res) => {
				expect(res.statusCode).to.equal(200)
			})
			.catch((err) => console.log(err))
	});
});