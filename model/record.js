
const mongoose = require('mongoose');


const recordSchema = mongoose.Schema({
      name:{
         type:String,
         required:true,
      },
      user:{
         
        //linking to the user
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
         
      },
      description:{
          type:String,
          required:true, 
      },
      category:{
         type:String,
         required:true,
      },
      active:{
         type:Boolean,
         required:true,
      }   
},{
     timestamps:true,
});
const Record = mongoose.model('Record',recordSchema);
module.exports = Record;

