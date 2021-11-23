const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = mongoose.Schema({
    firstName:{type: String, required: true, unique:false},
    lastName:{type: String, required: false, unique:false},
    phone:{type: String, required: true, unique:true},
    email:{type: String, required: false, unique:false},
    profile:{type: String, required: true, unique:false},
    active:{type: Boolean, required: true, unique:false},
    userAddress:{type: mongoose.Schema.ObjectId, ref:'address'},
  },{
    timestamps:true
  });
  
  usersSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("users",usersSchema);