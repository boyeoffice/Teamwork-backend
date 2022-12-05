const { expect } = require('chai');
const request = require('supertest');

const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration');
const createUser = require('../../database/factory/user.factory');
const app = require('../../app');

const url = '/api/v1/auth/login';
const mockData = require('../utils/userDummy');

const { validDetails, invalidEmail } = mockData.login;



describe('Login', () => {

  beforeEach((done) => {
    createUsersTable().then(res => {
      createUser().then(res => {
        done();
      }).catch(err => {
        done();
      });
    }).catch(err => {
      console.log(err)
      done()
    })
  })

  it('should login a valid user', (done) => {
      request(app)
          .post(url)
          .set('accept', 'application/json')
          .send({ ...validDetails })
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.include.keys('data');
            done();
          });
  });

  it('should login invalid user', (done) => {
    request(app)
        .post(url)
        .set('accept', 'application/json')
        .send({ ...invalidEmail })
        .end((err, res) => {
            expect(res.statusCode).to.equal(401);
            expect(res.body).to.include.keys('message');
            done();
        });
  });

  it('should login user with empty data', (done) => {
    request(app)
        .post(url)
        .set('accept', 'application/json')
        .end((err, res) => {
            expect(res.statusCode).to.equal(422);
            done();
        });
  });

  afterEach((done) => {
    dropUsersTable().then(res => {
      done();
    }).catch(err => {
      done();
    });
  })

});
