const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const authenticationSchema = mongoose.Schema({
    userId:{type: mongoose.Schema.ObjectId, ref:'users'},
    phone:{type: String, required: true, unique:true},
    password:{type: String, required: false, unique:false},
    verified:{type: String, required: false, unique:true}
  },{
    timestamps:true
  });
  
  authenticationSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("authentication",authenticationSchema);