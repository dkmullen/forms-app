// routes module simply handles routes requests

const FormsController = require('../controllers/forms_controller');

module.exports = app => {
    app.get('/', FormsController.greeting);
    app.post('/subscriber', FormsController.create);
}