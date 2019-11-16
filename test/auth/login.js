const expect = require("chai").expect;
const app = require("../../app");
const request = require('supertest');
const url = '/v1/auth/login';
const mockData = require('../utils/userDummy');

const {validDetails} = mockData.login

describe('Test login', () => {
	it('should login a valid user', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...validDetails })
            .end((err, res) => {
                console.log(res.body)
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.include.keys('data');
                //expect(res.body.data).to.include.keys('user');

                done(err);
            });
   });
});