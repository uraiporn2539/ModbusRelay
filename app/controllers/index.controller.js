var db=require('../../config/mongoose');

var render=(req,res)=>{
    res.render('index');
}

module.exports={
    render
}