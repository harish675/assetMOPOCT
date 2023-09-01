
const Record = require('../model/record'); 

module.exports.dashboard = async function (req,res){
    

     let records =await   Record.find({});
     
    const categories = [
        { value: 'cat1', label: 'Category 1' },
        { value: 'cat2', label: 'Category 2' },
        { value: 'cat3', label: 'Category 2' },
        { value: 'cat4', label: 'Category 3' },
        { value: 'cat5', label: 'Category 4' },
        // Add more categories as needed
    ];
    return res.render('dashboard',{
         
         title:'dashboard',
         categories:categories,
         records:records,
    })

}