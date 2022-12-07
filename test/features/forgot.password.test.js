const { expect } = require('chai');
const request = require('supertest');

const { createResetPasswordsTable, dropResetPasswordTable } = require('../../database/migrations/reset.password.migration')
const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration');
const createUser = require('../../database/factory/user.factory');
const app = require('../../app');

const url = '/api/v1/auth/forgot/password';
const mockData = require('../utils/userDummy');

const { validDetails, invalidEmail } = mockData.login;

describe('Forgot Password', () => {

  // beforeEach((done) => {
  //   createResetPasswordsTable().then(res => {
  //     done();
  //   });
  // });

  before(async () => {
    await createResetPasswordsTable();
    await createUsersTable();
    await createUser();
  })

  it('should send token when valid email is passed', (done) => {
    request(app)
          .post(url)
          .set('accept', 'application/json')
          .send({ ...validDetails })
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
  });

  it('should pass invalid email', (done) => {
    request(app)
          .post(url)
          .set('accept', 'application/json')
          .send({ ...invalidEmail })
          .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
          });
  });

  it('should pass empty value', (done) => {
    request(app)
          .post(url)
          .set('accept', 'application/json')
          .end((err, res) => {
            expect(res.statusCode).to.equal(422);
            done();
          });
  });

  after(async () => {
    await dropResetPasswordTable();
    await dropUsersTable();
  })
});
