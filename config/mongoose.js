
//require mongoose library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb+srv://app:app@cluster0.trayj8w.mongodb.net/app');

//acquire the connection 
 
const db = mongoose.connection;

db.on('error',function(err){
    console.log(err.message);
});

db.once('open',function(){
   
    console.log("Successfully connected  the database");
});