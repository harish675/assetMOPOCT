const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());

//set up ejs and layouts
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views');

//set up static files and 
app.use(express.static('./assets'));

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));




//check server is running or not
app.listen(port,function(err){ 
     if(err){
          console.log("Error in Running the Server");
     }
     console.log("Server is running on port ",port);
})
