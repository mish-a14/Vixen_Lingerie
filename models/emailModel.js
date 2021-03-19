const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const email= require('mongoose-type-email');

let emailSchema = new Schema({
    email: mongoose.SchemaTypes.Email
    });



    
let emailModel = mongoose.model('emailSchema', emailSchema)
module.exports= emailModel;

  