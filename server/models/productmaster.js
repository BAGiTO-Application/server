const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const productMasterSchema = mongoose.Schema({
    productCode:{type: String, required: true, unique:true},
    productName:{type: String, required: false, unique:false},
    manufacturer:{type: String, required: false, unique:false},
    ingredients:{type: String, required: false, unique:false},
    price:{type: [{unit:String,value:String}], required: true, unique:false},
    measuringUnit:{type: String, required: true, unique:false},
    priceUnit:{type: String, required: true, unique:false},
    category:[{type: String, required: false, unique:false}],
    productImage:[{type: String, required: false, unique:false}],
    searchKey:[{type: String, required: false, unique:false}]
  },{
    timestamps:true
  });
  
  productMasterSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("productMaster",productMasterSchema);