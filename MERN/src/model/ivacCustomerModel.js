const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    phone:{type:String, required: true, unique:true},
    address:{type:String},
    status:{type:String, enum: ['active', 'inactive'], default:"active"},
    deviceId:{type:String},
    userAgent:{type:String},
    browser:{type:String},
    os:{type:String},
    deviceType:{type:String},
    deviceInfo:{type:String},
    ipAddress:{type:String},
},{timestamps:true, versionKey:false});

const IvacCustomerModel = mongoose.models.customers || mongoose.model("customers", databaseSchema);
module.exports = IvacCustomerModel;
