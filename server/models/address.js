const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const addressSchema = mongoose.Schema({
    addressLine1:{type: string, required: true, unique:false},
    addressLine2:{type: string, required: true, unique:false},
    city:{type: string, required: true, unique:false},
    state:{type: string, required: true, unique:false},
    country:{type: string, required: true, unique:false},
    postalCode:{type: string, required: true, unique:false}
  },{
    timestamps:true
  });
  
  addressSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("address",addressSchema);