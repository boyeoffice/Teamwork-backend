// /* eslint-disable no-undef */
// const { expect } = require('chai');
// const request = require('supertest');
// const app = require('../../app');

// const url = '/api/v1/admin/employee';
// const mockData = require('../utils/userDummy');

// const { validDetails, invalidEmail } = mockData.login;

// describe('### Test token', () => {
//     it('Unauthenticated', (done) => {
//         request(app)
//             .post(url)
//             .set('accept', 'application/json')
//             .send({ ...validDetails })
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(401);
//                 // expect(res.body).to.include.keys('data');
//                 // expect(res.body.data).to.include.keys('userId');
//                 done();
//             });
//     });
// });
