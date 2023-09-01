
const passport = require('passport');

const LocalsStrategy = require('passport-local').Strategy;
const User = require('../model/user');

//create authenticate function
//authentication using passport
passport.use(new LocalsStrategy(
    { 
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
//deserializing the user from the  key in the cookies
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

//check if the user is authenticated 

passport.checkAuthentication = function(req,res,next){
        
        //if the user is signed in, then pass on the request to the next function(controllers action)
        if(req.isAuthenticated()){
                return next();
        }

        //if the user is not signed in

        return res.redirect(('/user/login'));
}

passport.setAuthenticatedUser = function(req,res,next){
         
         if(req.isAuthenticated()){
                //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for views
                 res.locals.user = req.user;
         }

         next();
}

module.exports = passport;