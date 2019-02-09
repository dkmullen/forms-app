const assert = require('assert'),
    request = require('supertest');

const app = require('../app');

describe('The forms app', () => {
    it('handles a GET request to /', (done) => {
        request(app)
            .get('/')
            .end((err, response) => {
                console.log(response.body);
                assert(response.body.hello === 'world');
                done();
            })
    })
})