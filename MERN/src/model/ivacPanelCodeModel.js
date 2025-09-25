const mongoose = require('mongoose');

const databaseSchema = mongoose.Schema({
    code:{type:String, required: true, default:""},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"users", required:true, default:""},
},{timestamps:true, versionKey:false});

const IvacPanelCodeModel = mongoose.models.ivacPanelCodes || mongoose.model("ivacPanelCodes", databaseSchema);
module.exports = IvacPanelCodeModel;
