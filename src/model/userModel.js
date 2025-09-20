const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    password:{type:String},
    role:{type:String, enum: ['admin', 'user'], default:"user"},
    phone:{type:String, required: true},
    address:{type:String, required: true},
},{timestamps:true, versionKey:false});

const UserModel = mongoose.models.users || mongoose.model("users", databaseSchema);
module.exports = UserModel;