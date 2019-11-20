process.env.Test = 'test';
const expect = require("chai").expect;
const app = require("../../app");
const request = require('supertest');
const url = '/v1/auth/create-user';
const mockData = require('../utils/userDummy');

const {emptyData, validDetails} = mockData.createUser

describe('Empty data', () => {
	it('should return value required', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...emptyData })
            .end((err, res) => {
                expect(res.statusCode).to.equal(422);
                expect(res.body).to.include.keys('data');
                done(err);
            });
   });
});

describe('Create new user', () => {
	it('should return response 200', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...validDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.include.keys('data');
                done(err);
            });
   });
});