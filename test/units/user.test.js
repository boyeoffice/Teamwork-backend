const { expect } = require('chai');
const request = require('supertest');

const { createAllTables, dropAllTables } = require('../../database');

describe('Test users table', function () {
  beforeEach('Migrate all schema', async function (done) {
    createAllTables()
    // done()
  })

  it('Should migrate all table', (done) => {
    done()
  })
})
