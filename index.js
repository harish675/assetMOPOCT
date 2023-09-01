const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
//set up ejs and layouts
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));




//check server is running or not
app.listen(port,function(err){ 
     if(err){
          console.log("Error in Running the Server");
     }
     console.log("Server is running on port ",port);
})
