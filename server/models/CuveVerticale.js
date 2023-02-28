const mongoose = require('mongoose');

const CuveVerticaleSchema = mongoose.Schema({
    capacity: String,
    
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

module.exports = mongoose.model('CuveVerticale', CuveVerticaleSchema);
