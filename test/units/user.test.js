const { expect } = require('chai');
const request = require('supertest');

// const { createAllTables, dropAllTables } = require('../../database');
const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration');
const createUser = require('../../database/factory/user.factory');

describe('Test users table', function (done) {

  beforeEach(function (done) {
    createUsersTable().then(res => {
      done();
    })
  })

  it('Create user', (done) => {
    createUser.seed().then(res => {
      expect(res.rowCount).to.equal(1)
      done();
    }).catch(err => {
      done();
    });
  })

  afterEach((done) => {
    dropUsersTable().then(res => {
      done();
    }).catch(err => {
      done();
    });
  })
})
