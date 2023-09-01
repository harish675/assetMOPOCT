const Record = require('../model/record');

//creating record
module.exports.create = async function(req,res){ 

    try{
           
          const record = await Record.create({               
                name:req.body.name,
                user:req.user._id,
                description:req.body.description,
                category:req.body.category,
                active:req.body.active,
          });
          
          console.log(record);
          return res.redirect('back');

    }
    catch(err){
         
         console.log("Error in creating record",err);
         return res.redirect('back');
    }
 
}

//deleting record 

module.exports.delete = async function(req,res){
     
       try{
         
          let record = await Record.findByIdAndDelete(req.params.id);
          return res.redirect('back');

       }
       catch(err){
            console.log("error in deleting record",err);
            return res.redirect('back');
       }
}

//delete multiple records

module.exports.deleteMany = async function(req,res){

            try {
            
            const recordIds = req.body.recordIds;

            await Record.deleteMany({ _id: { $in: recordIds } });

            res.json({ message: 'Records deleted successfully' });

            } catch (error) {
            console.error('Error deleting records:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            }        
}
   