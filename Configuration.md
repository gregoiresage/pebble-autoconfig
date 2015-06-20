# Configuration #
Two files need to be configured to use Pebble Autoconfig:

  1. [App Info (appinfo.json)](AppInfo.md)
  1. [Main (main.c)](Main.md)

## App Info ##
For full explaination of available fields and configuration, see the [App Info](AppInfo.md) page.

### Example ###
```
"capabilities": [ "configurable" ],
"appKeys": {
	"background": 0,
	"direction": 1,
	"length": 2,
	"ipaddress": 3
},
"preferences": {
	"embeded": false,
	"debug": true,
	"url" : "http://wiki.pebble-autoconfig.googlecode.com/git/example/autoconfig.html",
	"description": "Use the form to configure your <strong>Pebble Watch</strong>",
	"items": [{
		"name": "background",
		"title": "Background color",
		"type": "boolean",
		"off-text": "White",
		"on-text": "Black",
		"default": true
	},
	{
		"name": "direction",
		"title": "Direction",
		"description": "Where should we head?",
		"type": "enum",
		"choices": {
			"NORTH": "North",
			"EAST": "East",
			"SOUTH": "South",
			"WEST": "West"
		},
		"default": 2
	},
	{
		"name": "length",
		"title": "Length",
		"description": "Between 0 and 100",
		"type": "integer",
		"min": 0,
		"max": 100,
		"default": 17
	},
	{
		"name": "ipaddress",
		"title": "IP address",
		"type": "string",
		"pattern": "^[0-9]{1,3}(\\.[0-9]{1,3}){3}$",
		"max-length": 15,
		"default": "127.0.0.1"
	}]
}
```

## Main ##
For full explaination of available fields and configuration, see the [Main](Main.md) page.

### Example ###
```
#include <pebble.h>
// Include Pebble Autoconfig
#include "autoconfig.h"

static Window *window;

static void in_received_handler(DictionaryIterator *iter, void *context) {
	// Let Pebble Autoconfig handle received settings
	autoconfig_in_received_handler(iter, context);

	// Here the updated settings are available
	APP_LOG(APP_LOG_LEVEL_DEBUG, "Configuration updated. Background: %s Direction: %d Length: %d IP address: %s", 
		getBackground() ? "true" : "false", getDirection(), (int)getLength(), getIpaddress()); 
}

static void init(void) {
	// Initialize Pebble Autoconfig to register App Message handlers and restores settings
	autoconfig_init();

	// Here the restored or defaulted settings are available
	APP_LOG(APP_LOG_LEVEL_DEBUG, "Configuration restored. Background: %s Direction: %d Length: %d IP address: %s", 
		getBackground() ? "true" : "false", getDirection(), (int)getLength(), getIpaddress()); 

	// Register our custom receive handler which in turn will call Pebble Autoconfigs receive handler
	app_message_register_inbox_received(in_received_handler);
	
	window = window_create();
	window_stack_push(window, true);
}

static void deinit(void) {
	window_destroy(window);

	// Let Pebble Autoconfig write settings to Pebbles persistant memory
	autoconfig_deinit();
}

int main(void) {
	init();
	app_event_loop();
	deinit();
}
```