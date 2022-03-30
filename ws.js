const WebSocket = require('ws');
const ws_server = new WebSocket.Server({ port: 8080 });
var lr = true;
var clients = []
console.log("hey")

ws_server.on('connection', function connection(ws) {
	    consol3e.log("A client connected");
		// var connection = ws.accept('any-protocol',ws.origin)
	
		// clients.push(connection)
	    // let intervalid = setInterval(function(){
		// ws.send((lr)?"a":"d");
		// lr=!lr;
	    // }, 2000);
        //     setTimeout(function(){
	    // 	ws.send("q");
	    // 	clearInterval(intervalid);
	    // },10*1000);
	    ws.on('message', function incoming(message) {
		            // clients.forEach(function(client){
                    //     console.log("sendt");
					// 	client.send(message.utf8Data)
					// })
                    // var m = message.toString()
                    // console.log(m);
                    // var o = m == "left" ? 'a' : 'd'
                    // console.log(o);


                    ws_server.clients.forEach(client => client.send(message))
		});
});
