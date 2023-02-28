const mongoose = require('mongoose');

const DevisSchema = mongoose.Schema({
    client: String,
    email: String,
    address: String,
    phone: String,
    Capacity: Number,
    CapacityUnit: String,
    Material: String,
    Position: String,
    Function: String,
    NameOfProduct: String,
    Viscosity: Number,
    Density: Number,
    RoofType: String,
    BottomType: String,
    AgitationType: String,
    Pressure: String,
    PressureIn: String,
    PressureOut: String,
    tempHeat: Number,
    tempFreezeStart: Number,
    tempFreeze: Number,
    tempStockStart: Number,
    tempStockEnd: Number,
    OtherCommentary: String,
    CreationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Devis', DevisSchema);


/**
 * tomorrow I have to:
 * add a Model for the 6 offers 
 * CALL the API from vue
 */