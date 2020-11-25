var express=require('express');
var morgan=require('morgan');
var compression=require('compression');
var cors=require('cors');
var bodyParser=require('body-parser');

module.exports=()=>{
    var app=express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(cors())
    app.set('views','./app/views');
    app.set('view engine','jade');
    require('../app/routes/index.route')(app);
    require('../app/routes/modbus.route')(app);
    return app;
}