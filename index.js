
const express = require('express');
const app = express();
const port = 8000;


app.use('/',require('./routes'));



//check server is running or not
app.listen(port,function(err){ 
     if(err){
          console.log("Error in Running the Server");
     }
     console.log("Server is running on port ",port);
})
