const mongoose = require("mongoose");
const Schema = mongoose.Schema; 


let reviewSchema = new Schema({
    picturesUrl: String, 
    comment: String,
    
    rating: {
        type: Number, min: 1, max: 5, default: 5}
    }, {
    timestamps: true
    });



let productSchema = new Schema ({
    picturesUrls: [String], 
    title: String, 
    price: Number, 
    color: [String],
    category: String, 
    size: [String], 
    description: String, 
    reviews: [reviewSchema]
});




//USER SCHEMA 
    // reference SHOPPING CART SCHEMA 
    //ORDERS 
    let productModel = mongoose.model('productSchema', productSchema)
    module.exports= productModel;

  