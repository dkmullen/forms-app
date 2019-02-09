// forms controller contains the logic of forms api requests, is called by routes module
const Subscriber = require('../models/subscriber');

module.exports = {
    greeting(req, res) {
        res.send({ hello: 'world' });
    },
    create(req, res, next) {
        console.log(req.body);
        Subscriber.create(req.body)
            .then(subscriber => res.send(subscriber))
            .catch(next);        
    }
}