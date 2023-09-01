
const mongoose = require('mongoose');

//creating user Schema for storing users details

const userSchema = new mongoose.Schema({
     
      email:{
         
         type:String,
         required:true,
         unique:true,
       },
     password :{
          
          type:String,
          required:true,
     },
     name:{
         type:String,
         required:true,
     },
     gender :{
         type:String,
         required:true,
     }
     
},{
    
    timestamps:true,
})

const User = mongoose.model('User',userSchema);

module.exports = User;