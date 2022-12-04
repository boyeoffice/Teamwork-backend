const { expect } = require('chai');
const request = require('supertest');

const { createAllTables, dropAllTables } = require('../../database');

describe('Test users table', function (done) {
  beforeEach('Migrate all schema', function (done) {
      createAllTables().then(res => {
        done()
      })
  })

  it('Should migrate all table', (done) => {
    console.log(process.env.PG_DB_NAME);
    done()
  })
})
