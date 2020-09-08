/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../app');

const url = '/api/v1/auth/login';
const mockData = require('../utils/userDummy');

const { validDetails, invalidEmail, invalidPassword } = mockData.login

describe('Test login', () => {
    it('should login a valid user', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ ...validDetails })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.include.keys('data');
                // expect(res.body.data).to.include.keys('userId');
                done(err);
            });
    });
});
