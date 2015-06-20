# Main #

The following sections must be configured in _main.c_ to enable Pebble Autoconfig:

  * [Includes](Main#Includes.md)
  * [Initialize](Main#Initialize.md)
  * [Deinitialize](Main#Deinitialize.md)

The following is likely wanted as well:

  * [Custom received handler](Main#Custom_received_handler.md)


---


## Includes ##
Your app must include the generated Pebble Autoconfig header file. It contains all methods needed to handle configuration.

### Example ###
```
#include <pebble.h>
#include "autoconfig.h"
```

## Initialize ##
In your apps _init()_ function you must initialize Pebble Autoconfig. This will set up Pebble Autoconfig to receive App Messages and also restore settings from the Pebbles persistant memory. If the application is started for the first time the default values you defined in [App Info](AppInfo.md) will be restored.

### Example ###
```
static void init(void) {	
	autoconfig_init();

	window = window_create();
	window_stack_push(window, true);
}
```

## Deinitialize ##
In your apps _deinit()_ function you must deinitialize Pebble Autoconfig. This will write your settings to Pebbles persistant memory so it can be restored the next time you launch your app.

### Example ###
```
static void deinit(void) {
	window_destroy(window);

	autoconfig_deinit();
}
```

## Custom received handler ##
It is likely that one want to write a custom received handler to do some action when configuration is updated, like update the screen.

The first thing you must add to your custom received handler is a call to Pebble Autoconfigs received handler. If you don't do that, your settings will not be updated automatically.

You must also register your custom received handler in your apps init function instead of Pebble Autoconfigs.

### Example ###
```
static void in_received_handler(DictionaryIterator *iter, void *context) {
	autoconfig_in_received_handler(iter, context);

	APP_LOG(APP_LOG_LEVEL_DEBUG, "Configuration updated. Direction: %d", getDirection()); 
}

static void init(void) {	
	autoconfig_init();

	app_message_register_inbox_received(in_received_handler);

	window = window_create();
	window_stack_push(window, true);
}
```