const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

let userSchema = new Schema  ({
    name: String, 
    email: String, 
    bag: [Schema.Types.ObjectId],
    googleId: String
}, {
  timestamps: true
});

let userModel = mongoose.model('userSchema', userSchema)
module.exports= userModel;