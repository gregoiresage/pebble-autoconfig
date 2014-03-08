// Called when incoming message from the Pebble is received
Pebble.addEventListener("appmessage", function(e) {
	console.log("Received ping: " + e.payload.ping);
	// Send message back to watch
	Pebble.sendAppMessage({"pong": "Who's there?"});
});