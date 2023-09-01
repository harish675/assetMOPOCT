
//require mongoose library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb://127.0.0.1/task_assessment_db');

//acquire the connection 
 
const db = mongoose.connection;

db.on('error',function(err){
    console.log(err.message);
});

db.once('open',function(){
   
    console.log("Successfully connected  the database");
});