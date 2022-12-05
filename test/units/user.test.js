const { expect } = require('chai');
const request = require('supertest');

// const { createAllTables, dropAllTables } = require('../../database');
const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration')

describe('Test users table', function (done) {
  beforeEach('Migrate all schema', function (done) {
    createUsersTable().then(res => {
      done()
    })
  })

  it('Should migrate all table', (done) => {
    console.log(process.env.PG_DB_NAME);
    done();
  })
  afterEach('Roll back migration', (done) => {
    dropUsersTable().then(res => {
      done();
    })
  })
})
