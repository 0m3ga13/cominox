const mongoose = require('mongoose');

const MelangeurLaitSchema = mongoose.Schema({
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

module.exports = mongoose.model('MelangeurLait', MelangeurLaitSchema);
