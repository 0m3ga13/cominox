const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    capacity: String,
    
    client: String,
    email: String,
    message: String,
    CreationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
