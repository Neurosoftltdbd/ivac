const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    phone:{type:String, required: true},
    address:{type:String, required: true},
    status:{type:String, enum: ['active', 'inactive'], default:"active"},
    deviceId:{type:String, required: true},
    userAgent:{type:String, required: true},
    browser:{type:String, required: true},
    os:{type:String, required: true},
    deviceType:{type:String, required: true},
    deviceInfo:{type:String, required: true},
    ipAddress:{type:String, required: true},
},{timestamps:true, versionKey:false});

const IvacCustomerModel = mongoose.models.customers || mongoose.model("customers", databaseSchema);
module.exports = IvacCustomerModel;
