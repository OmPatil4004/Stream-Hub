const { type } = require("express/lib/response");

const request = require('request'); // Ensure this line is present


const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/StreamHub"; // Update this line with your actual MongoDB URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("MongoDB connection error:", err));


const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});



const colection= mongoose.model('colection',LogInSchema);

module.exports=colection