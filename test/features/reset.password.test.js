const { expect } = require('chai');
const request = require('supertest');

const { createResetPasswordsTable, dropResetPasswordTable } = require('../../database/migrations/reset.password.migration')
const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration');
const createUser = require('../../database/factory/user.factory');
const app = require('../../app');

const url = '/api/v1/auth/reset/password';

describe('Reset Password', () => {

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

  it('should send pass invalid token', (done) => {
    request(app)
          .post(url)
          .set('accept', 'application/json')
          .send({
            reset_token: '74623',
            password: '123456',
            password_confirmation: '123456'
           })
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
