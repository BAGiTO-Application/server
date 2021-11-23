const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const storeProductsSchema = mongoose.Schema({
    store:{type: mongoose.Schema.ObjectId, ref:'store'},
    productName:{type: String, required: true, unique:false},
    productCode:{type: String, required: true, unique:false},
    price:{type: String, required: true, unique:false},
    category:[{type: String, required: true, unique:false}],
    brand:{type: String, required: true, unique:false},
    availQuantity:{type: String, required: true, unique:false},
    measuringUnit:{type: String, required: true, unique:false},
    image:{type: String, required: true, unique:false},
    priceUnit:{type: String, required: true, unique:false},
    discountPrice:{type: String, required: true, unique:false},
  },{
    timestamps:true
  });
  
  storeProductsSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("storeProduct",storeProductsSchema);