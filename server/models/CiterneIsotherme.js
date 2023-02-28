const mongoose = require('mongoose');

const citerneIsothermeSchema = mongoose.Schema({
    capacity: String,
    compartmentNumber: Number,
    pump: String,
    client: String,
    email: String,
    address: String,
    postalCode: Number,
    city: String,
    Phone: String,
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('CiterneIsotherme', citerneIsothermeSchema);
