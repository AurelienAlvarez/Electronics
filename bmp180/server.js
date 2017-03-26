// Run this script with node.js
// This program starts a http server, requires and sends back data from the serial port when receiving requests from a web-client.


// Serial port communication
var SerialPort = require('serialport');
//var portName = '/dev/cu.InfoLabo-BT9600-DevB';
var portName = '/dev/cu.usbmodem1411';
var port = new SerialPort(portName, {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  parser: SerialPort.parsers.readline('\n')
  });



// HTTP server and socket.io
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
var http = require('http');
var server = http.createServer(app);

var io = require('socket.io').listen(server);
io.on('connection', function (socket) {
  socket.on('data_request', function(){port.write('1');});
  port.on('data', function(data){
  	console.log(data);
  	var temperature = data.substring(1,data.indexOf('P'));
  	var pressure = data.substring(data.indexOf('P')+1);
  	socket.emit('temperature', temperature);
  	socket.emit('pressure', pressure);
  });
});


server.listen(8000);
