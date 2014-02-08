var config_url = "http://192.168.0.10:8080";

Pebble.addEventListener("ready", function(e) {
    console.log("Ready");
});

Pebble.addEventListener("showConfiguration", function (e) {
    Pebble.openURL(config_url);
});

Pebble.addEventListener("webviewclosed", function(e) {
    console.log(e.response);
    var responseFromWebView = decodeURIComponent(e.response);
    var settings = JSON.parse(responseFromWebView);
    Pebble.sendAppMessage(settings);
});