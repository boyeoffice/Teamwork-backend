// /* eslint-disable no-undef */
// const { expect } = require('chai');
// const request = require('supertest');
// const app = require('../../app');

// const url = '/api/v1/admin/employee';
// const mockData = require('../utils/userDummy');

// const { validDetails } = mockData.login;

// const userCredentials = {
//     email: 'admin@example.com',
//     password: '123456',
// };

// const createEmployee = {
//     email: 'user@example.com',
//     first_name: 'User',
//     last_name: 'User',
//     gender: 'Male',
//     job_role: 'Accountant',
//     department: 'Accounting',
//     address: 'Ogun',
// };

// before((done) => {
//     request(app)
//         .post('/api/v1/auth/login')
//         .send(userCredentials)
//         .end((err, response) => {
//             // console.log(response)
//             token = `Bearer ${response.body.data.token}`;
//             expect(response.statusCode).to.equal(200);
//             done();
//         });
// });

// describe('### Test create employee', () => {
//     it('try to create user with exist email', (done) => {
//         request(app)
//             .post(url)
//             .set('accept', 'application/json')
//             .set('Authorization', token)
//             .send({ ...validDetails })
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(422);
//                 expect(res.body).to.include.keys('data');
//                 // expect(res.body.data).to.include.keys('userId');
//                 done();
//             });
//     });
// });

// describe('### Test create employee', () => {
//     it('try to create user with new email', (done) => {
//         request(app)
//             .post(url)
//             .set('accept', 'application/json')
//             .set('Authorization', token)
//             .send(createEmployee)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(201);
//                 // expect(res.body).to.include.keys('data');
//                 done();
//             });
//     });
// });
