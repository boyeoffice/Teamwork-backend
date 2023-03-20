/* eslint-disable no-undef */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

const url = '/';

describe('Test index', () => {
    it('should return success', (done) => {
        request(app)
            .get(url)
            .set('accept', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});

/* describe('Test endpoint not found', () => {
    it('should return error 404', (done) => {
        request(app)
            .get('/vq')
            .set('accept', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });
}); */
