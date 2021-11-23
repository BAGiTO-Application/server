const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const imageSchema = new mongoose.Schema({
    productImage: String,
    productCode: String
},{
    timestamps:true
  });

  imageSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("image",imageSchema);