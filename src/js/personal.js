// Called when incoming message from the Pebble is received
Pebble.addEventListener("appmessage",
  function(e) {
    console.log("Received ping: " + e.payload.ping);
    // send pong
    Pebble.sendAppMessage({"pong": "Who's there?"});
  });