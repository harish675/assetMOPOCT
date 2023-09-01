
module.exports.login = function(req,res){
     
      
     return res.render('login',{
         
          title:"login",
     });
}

module.exports.registration = function(req,res){
     
      
    return res.render('registration',{
        
         title:"registration",
    });
}