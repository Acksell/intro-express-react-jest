
const request = require('supertest');
const app = require('./app.js')

describe('/api/users', () => {
    test('It should return 200 OK', () => {
        return request(app).get('/api/users').expect(200);
    });
})

