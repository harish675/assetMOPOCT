const User = require('../model/user');

//render the login page
module.exports.login = function(req,res){
     
     return res.render('login',{
         
          title:"login",
     });
}

//render the registration page 
module.exports.registration = function(req,res){
     
      
    return res.render('registration',{
        
         title:"registration",
    });
}


//create or new user registration
module.exports.createUser = async function(req,res){
       
      try{
          
             if(req.body.password != req.body.conform_password){
                  console.log("conform password does not match");
                  return res.redirect('back');
             } 
               const user = await User.findOne({email:req.body.email})
               if(!user){   
                    await User.create(req.body); 
                    return res.send("<h1>User create successfully ....</h1>");
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
      
   return res.send('<h1>Well come to user profile</h1>');
      
}