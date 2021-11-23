const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, ref:'users'},
    storeId: {type: mongoose.Schema.ObjectId, ref:'store'},
    orderStatus:{type: String, required: true, unique:false, default: 'Pending'},
    orderType:{type: String, required: true, unique:false, default: 'Pickup'},
  },{
    timestamps:true
  });
  
  orderSchema.plugin(uniqueValidator);
  orderSchema.plugin(AutoIncrement, {inc_field: 'orderNumber'});
  
  module.exports = mongoose.model("order",orderSchema);