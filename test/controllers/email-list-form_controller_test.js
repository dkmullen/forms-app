const assert = require('assert'),
    request = require('supertest');

const app = require('../../app');

describe('Forms Controller', () => {
    it('Post to /email-list-forms creates a new form', done => {
        request(app)
            .post('/email-list-forms')
            .send({ email: 'me@me.com' })
            .end(() => {
                done();
            });
    });
})