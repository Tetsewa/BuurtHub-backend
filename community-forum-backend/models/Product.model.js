const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  city : { type : String, required : true},  
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  image : { type : String, contentType: String },
  description: { type : String, required : false },
  condition : {type : String, required : false},
  productOwner : { type : String, required: false },
  category : { type : String , required : false},
  reservedById : { type : String, required: false},
  favouriteById : { type : String, required: false},
 
});


const Product = mongoose.model("Product", productSchema);

// EXPORT THE MODEL
module.exports = Product;
