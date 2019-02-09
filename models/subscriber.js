const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SubscriberSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    ReadEULA: {
        type: Boolean,
        default: false
    }
});

const Subscriber = mongoose.model('subscriber', SubscriberSchema);

module.exports = Subscriber;