/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../app');

const url = '/api/v1/auth/forgot/password';

describe('### Fortgot password', () => {
    it('should send valid data', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ email: 'admin@example.com' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                // expect(res.body).to.include.keys('data');
                // expect(res.body.data).to.include.keys('userId');
                done();
            });
    });
});

describe('### Fortgot password', () => {
    it('should send invalid data', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            .send({ email: 'admin@example.co' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                // expect(res.body).to.include.keys('data');
                // expect(res.body.data).to.include.keys('userId');
                done();
            });
    });
});

describe('### Fortgot password', () => {
    it('should validate valid data', (done) => {
        request(app)
            .post(url)
            .set('accept', 'application/json')
            // .send({ email: 'admin@example.com' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(422);
                // expect(res.body).to.include.keys('data');
                // expect(res.body.data).to.include.keys('userId');
                done();
            });
    });
});
