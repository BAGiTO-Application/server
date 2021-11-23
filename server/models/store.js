const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const storeSchema = mongoose.Schema({
    storeName:{type: String, required: true, unique:false},
    parentStore:{type: mongoose.Schema.ObjectId, ref:'store'},
    storeOwner:{type: mongoose.Schema.ObjectId, ref:'users'},
    gstin:{type: String, required: true, unique:false},
    category:{type: String, required: true, unique:false},
    storeStatus:{type: Boolean, require: true, unique: false, default: false},
    isAuthenticated:{type: Boolean, require : true, unique: false, default: false},
    storeViewed:{type: Number, require: true, unique: false, default: 0},
    storeRating:{type: Number, require: true, unique: false, default: 0},
    storeAddress:{type: mongoose.Schema.ObjectId, ref:'address'},
  },{
    timestamps:true
  });
  
  storeSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("store",storeSchema);