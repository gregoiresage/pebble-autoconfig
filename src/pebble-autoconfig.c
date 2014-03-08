#include <pebble.h>
// Include Pebble Autoconfig
#include "autoconfig.h"

#define SETTING_COUNT 4

// Key values for AppMessage Dictionary
enum {
	PING_KEY = 100,	
	PONG_KEY = 101
};

static Window *window;

static TextLayer *layer[SETTING_COUNT];
static char text[SETTING_COUNT][40];

static void updateDisplay() {
	snprintf(text[0], sizeof(text[0]), "Background: %s", getBackground() ? "true" : "false");
	snprintf(text[1], sizeof(text[1]), "Direction: %d", getDirection());
	snprintf(text[2], sizeof(text[2]), "Length: %d", (int)getLength());
	snprintf(text[3], sizeof(text[3]), "IP address: %s", getIpaddress());

	for (int i = 0; i < SETTING_COUNT; ++i) {
		text_layer_set_text(layer[i], text[i]);
	}
}

static void logSettings(char *action) {
 APP_LOG(APP_LOG_LEVEL_DEBUG, "Configuration %s. Background: %s Direction: %d Length: %d IP address: %s", 
		action, getBackground() ? "true" : "false", getDirection(), (int)getLength(), getIpaddress()); 
}

static void in_received_handler(DictionaryIterator *iter, void *context) {
	// Let Pebble Autoconfig handle received settings
	autoconfig_in_received_handler(iter, context);

	// Here the updated settings are available
	logSettings("updated");

	// Update display with new values
	updateDisplay();

	// App Messages can be received while using Pebble Autoconfig
	Tuple *tuple = dict_find(iter, PONG_KEY);
	if(tuple) {
		APP_LOG(APP_LOG_LEVEL_DEBUG, "Received pong: %s", tuple->value->cstring); 
	}
}

static void select_single_click_handler(ClickRecognizerRef recognizer, void *window) {
	// App Messages can be sent while using Pebble Autoconfig
	DictionaryIterator *iter;
	app_message_outbox_begin(&iter);
	dict_write_cstring(iter, PING_KEY, "Knock, knock!");
	dict_write_end(iter);
  	app_message_outbox_send();
}

static void click_config_provider(void *context) {
	window_single_click_subscribe(BUTTON_ID_SELECT, (ClickHandler)select_single_click_handler);
}

static void init(void) {
	// Initialize Pebble Autoconfig to register App Message handlers and restores settings
	autoconfig_init();

	// Here the restored or defaulted settings are available
	logSettings("restored");

	// Register our custom receive handler which in turn will call Pebble Autoconfigs receive handler
	app_message_register_inbox_received(in_received_handler);
	
	window = window_create();
	Layer *window_layer = window_get_root_layer(window);
	GRect bounds = layer_get_frame(window_layer);

	for (int i = 0; i < SETTING_COUNT; ++i) {
		layer[i] = text_layer_create(GRect(10, 10 + i*35, bounds.size.w - 10, 28));
		layer_add_child(window_layer, text_layer_get_layer(layer[i]));
	}

	updateDisplay();

	// Attach our desired button functionality
	window_set_click_config_provider(window, (ClickConfigProvider) click_config_provider);

	window_stack_push(window, true);
}

static void deinit(void) {
	for (int i = 0; i < SETTING_COUNT; ++i) {
		text_layer_destroy(layer[i]);
	}

	window_destroy(window);

	// Let Pebble Autoconfig write settings to Pebbles persistant memory
	autoconfig_deinit();
}

int main(void) {
	init();
	app_event_loop();
	deinit();
}
