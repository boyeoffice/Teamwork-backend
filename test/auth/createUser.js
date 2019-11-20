process.env.Test = 'test';
const expect = require("chai").expect;
const app = require("../../app");
const request = require('supertest');
const url = '/v1/auth/create-user';
const mockData = require('../utils/userDummy');
const db = require('../../database');

const {emptyData, validDetails, invalidDetails} = mockData.createUser

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
	after( (done) => {
		db.query(`DELETE FROM users WHERE email = 'john@example.com'`).then((err, res) => {
			done();
		});
	});
	it('should return response 201', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...validDetails })
            .end((err, res) => {
            	console.log(res.body)
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.include.keys('data');
                done();
            });
   });
});

describe('User already registered', () => {
	it('should return response status 422', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...invalidDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(422);
                expect(res.body).to.include.keys('error');
                done(err);
            });
   });
});