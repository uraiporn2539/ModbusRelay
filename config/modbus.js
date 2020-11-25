var ModbusRTU=require('modbus-serial');
var client=new ModbusRTU();
//const serialPort="/dev/tty.usbserial-1410";
const serialPort="/dev/ttyUSB0";
client.connectRTU(serialPort,{buadRate:9600});

module.exports=client;