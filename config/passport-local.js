
const passport = require('passport');

const LocalsStrategy = require('passport-local').Strategy;
const User = require('../model/user');

//create authenticate function
//authentication using passport
passport.use(new LocalsStrategy({ 
    usernameField:'email'
  },
   function(email,password,done){
       //find a user and establish the identity
        
       User.findOne({email:email})
       .then((user)=>{

           if(!user || user.password != password){ 
              console.log("invalid user name password");
              return done(null,false);
           }

           return done(null,user);

         
       })
       .catch((err)=>{  
        console.log("error in finding user",err);
        return done(err);
       })
       
        
   }
   
  ));

  //serializing the user to decide which key is to be kept in cookies 

    passport.serializeUser(function(user,done){     
          done(null,user.id);

    });
    passport.deserializeUser(function(id,done){
         
          User.findById(id)
          .then((user)=>{
              
             return done(null,user);
          })
          .catch((err)=>{
              console.log("error in finding user",err);
              return done(err);
          })
    });

  //deserializing the user from the  key in the cookies
