const mongoose = require('mongoose');

const AuthorsSchema= new mongoose.Schema({

    Name : {
       type : String,
       required: [true, "Author name is required"],
  minlength: [3, "Author name must be at least three characters long"],

    }
    
},{timestamps:true});

const Author = mongoose.model('Author', AuthorsSchema);

module.exports=Author;