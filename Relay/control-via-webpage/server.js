// Run this script with node.js
// This program starts a http server, reads serial data and sockets data to a web-client.


// Serial port communication
var SerialPort = require('serialport');
var portName = '/dev/cu.InfoLabo-BT9600-DevB';
//var portName = '/dev/cu.usbmodem1411';
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
  port.write('S');
  socket.on('turnON', function() {
    port.write('1');
  });
  socket.on('turnOFF', function() {
    port.write('0');
  });
  port.on('data', function(data){
    console.log(data);
    socket.emit('state', data);
  });
});


server.listen(8000);
