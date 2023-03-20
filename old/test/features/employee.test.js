const { expect } = require('chai');
const request = require('supertest');

const { createUsersTable, dropUsersTable } = require('../../database/migrations/user.migration');
const seedAdmin = require('../../database/seeders/admin.seeder')
const app = require('../../app');

const url = '/api/v1/employees';
const mockData = require('../utils/userDummy');

const { validDetails } = mockData.login;

const userCredentials = {
  email: 'admin@example.com',
  password: '123456',
};

const createEmployee = {
  email: 'user@example.com',
  first_name: 'User',
  last_name: 'User',
  gender: 'Male',
  job_role: 'Accountant',
  department: 'Accounting',
  address: 'Ogun',
};

describe('Employee', () => {

  before((done) => {
    createUsersTable().then(res => {
      seedAdmin().then(res => {
        request(app)
          .post('/api/v1/auth/login')
          .set('accept', 'application/json')
          .send({...userCredentials})
          .end((err, res) => {
              // console.log(response)
              token = `Bearer ${res.body.data.token}`;
              done();
        });
      });
    })
  })

  // beforeEach((done) => {
  //   createUsersTable().then(res => {
  //     done();
  //   }).catch(err => {
  //     done();
  //   })
  // });

  it('should try to create user with existing email', (done) => {
    request(app)
      .post(url)
      .set('accept', 'application/json')
      .set('Authorization', token)
      .send({ ...validDetails })
      .end((err, res) => {
        expect(res.statusCode).to.equal(422);
        expect(res.body).to.include.keys('data');
        done();
      });
    });

    it('should try to create user with new email', (done) => {
      request(app)
        .post(url)
        .set('accept', 'application/json')
        .set('Authorization', token)
        .send({...createEmployee})
        .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.include.keys('message');
            done();
        });
    });

    after((done) => {
      dropUsersTable().then(res => {
        done();
      }).catch(err => {
        done();
      });
    })

});

