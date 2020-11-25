module.exports=(app)=>{
    var modbus=require('../controllers/modbus.controller');
    app.get('/modbus/on/:ch',modbus.turnOnRelay);
    app.get('/modbus/off/:ch',modbus.turnOffRelay);
}
