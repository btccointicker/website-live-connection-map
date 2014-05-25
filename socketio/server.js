var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app,{log:false});
    
var connectCounter=0;
var http = require('http');

app.listen(8080);


io.sockets.on('connection', function (socket) {

	var curConnected;
	var userlocdata;

	connectCounter++; 

	//on connect send a welcome message
	socket.emit('message', { 'channel' : 'users',users:result});

	//console.log(socket.handshake.address.address);
	var socket_ip = (socket.handshake != undefined && socket.handshake.address != undefined) ? socket.handshake.address.address : "IP_ERROR";

	//You are encouraged to setup your own freegeoip local instance. 
	//Souce code + installation instructions can be found here : https://github.com/fiorix/freegeoip
	//However for testing purposes you can uncomment the following line and comment out the next one
	//var url= 'http://freegeoip.net/json/'+socket_ip;
	var url = 'http://localhost:8095/json/'+socket_ip;

	var options = require('url').parse(url);

	http.get(options, function(res) {

		var body = '';

		res.on('data', function(chunk) {
		 	body += chunk;
		});
		res.on('end', function() {
		if(body.indexOf("metro_code") != -1){

		var resLocData = JSON.parse(body);

			userlocdata={'channel':'userloc','latitude': resLocData.latitude,'longitude': resLocData.longitude };
			io.sockets.in('userloc').emit('message', userlocdata);

		}

		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});


	socket.join("users");

	//on subscription request joins specified room
	//later messages are broadcasted on the rooms
	socket.on('subscribe', function (channel) {
		socket.join(channel);
	});
	socket.on('unsubscribe', function (channel) {
		socket.leave(channel);
	});

	socket.on('disconnect', function() {

		connectCounter--; 
	

	});

});

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

