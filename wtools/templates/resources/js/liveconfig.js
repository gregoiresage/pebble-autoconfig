window.onload = function() {
	var connection = new WebSocket("wss://liveconfig.fletchto99.com/forward/___UUID___/___TOKEN___");
	connection.onopen = function() {
	    [].forEach.call(document.getElementsByClassName("liveconfig"), function(elem) {
	        elem.onchange = function() {
	            var value = elem.value;

	            if (elem.type == "radio" || elem.type == "checkbox") {
	                value = elem.checked ? 1 : 0;
	            } else if (elem.type == "number" || elem.type == "range" ||elem.type == "select-one") {
	                value = parseInt(value);
	            }

	            var config = {};
	            config[elem.id] = value;
	            connection.send(JSON.stringify(config));
	        };

	        //Hack to get around broken color picker in Pebble slate library
	        if (elem.classList.contains("item-color")) {
	            var observer = new MutationObserver(function() {
	            	var config = {};
	            	config[elem.id] = textToColor(elem.value);
	                connection.send(JSON.stringify(config));
	            });
	            observer.observe(elem.nextSibling.firstChild, { attributes : true, attributeFilter : ['style'] });
	        }
	    });
	};
};