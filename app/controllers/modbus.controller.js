var modbusRTU=require('../../config/modbus');

/*var toggleRelay=(req,res)=>{
    modbusRTU.readCoils(req.params['ch'],1).then((data)=>{
        modbusRTU.writeCoil(req.params['ch'],!data.data);
        res.send({data:data.data});
    }).catch((err)=>{
        console.log(err);
        res.send("ERROR")
    });
}*/

var turnOnRelay=(req,res)=>{
    modbusRTU.writeCoil(req.params['ch'],1).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("ERROR");
    });
}

var turnOffRelay=(req,res)=>{
    modbusRTU.writeCoil(req.params['ch'],0).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("ERROR");
    });
}

module.exports={
    //toggleRelay,
    turnOnRelay,
    turnOffRelay
}
