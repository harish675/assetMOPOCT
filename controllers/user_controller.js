const User = require('../model/user');

//render the login page
module.exports.login = function(req,res){

     if(req.isAuthenticated()){
          return res.redirect('/dashboard');
        }
     
     return res.render('login',{
         
          title:"login",
     });
}

//render the registration page 
module.exports.registration = function(req,res){
     
     if(req.isAuthenticated()){
          return res.redirect('/dashboard');
     }
      
    return res.render('registration',{
        
         title:"registration",
    });
}


//create or new user registration
module.exports.createUser = async function(req,res){
       
      try{
          
             if(req.body.password != req.body.confirm_password){
                  console.log("conform password does not match");
                  return res.redirect('back');
             } 
               const user = await User.findOne({email:req.body.email})
               if(!user){   
                    await User.create(req.body); 
                    return res.send('/user/login');
               }
               else{
                    console.log("email already present login ")
                    return res.redirect('/user/login');
               }
         
      }
      catch(err){    
               console.log("error in creating user",err);
               return res.redirect('back');
     }
       
}
  
//sign in and create  a session for the user
module.exports.createSession = function(req,res){
   return res.redirect('/dashboard');
}

module.exports.destroySession = function(req,res){

     req.logout(function(err){
          if(err){
              return next(err);
          }
          return res.redirect('/')
     });
    
};