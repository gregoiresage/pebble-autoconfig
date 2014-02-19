#include <pebble.h>
#include "autoconfig.h"

static Window *window;
static TextLayer *background_layer;
static TextLayer *direction_layer;
static TextLayer *length_layer;
static TextLayer *ipaddress_layer;

static char background_string[20]="";
static char direction_string[20]="";
static char length_string[20]="";
static char ipaddress_string[40]="";

static void updateDisplay() {
  snprintf(background_string, sizeof(background_string), "Background: %d", (int)getBackground());
  text_layer_set_text(background_layer, background_string);
  snprintf(direction_string, sizeof(direction_string), "Direction: %d", (int)getDirection());
  text_layer_set_text(direction_layer, direction_string);
  snprintf(length_string, sizeof(length_string), "Length: %d", (int)getLength());
  text_layer_set_text(length_layer, length_string);
  snprintf(ipaddress_string, sizeof(ipaddress_string), "IP Address: %s", getIpaddress());
  text_layer_set_text(ipaddress_layer, ipaddress_string);
}

static void doLog(char *text) {
 APP_LOG(APP_LOG_LEVEL_DEBUG, "Configuration %s. Background: %d Direction: %d Length: %d IP Address: %s", 
    text, getBackground(), getDirection(), (int)getLength(), getIpaddress()); 
}

static void in_received_handler(DictionaryIterator *iter, void *context) {
  // call autoconf_in_received_handler
  autoconfig_in_received_handler(iter, context);

  // here the new settings are available
  doLog("updated");

  //update display
  updateDisplay();
}

static void init(void) {
  // call autoconfig init (load previous settings and register app message handlers)
  autoconfig_init();

  // here the previous settings are already loaded
  doLog("restored");

  //override autoconfig in_received_handler (if something must be done when new settings arrive)
  app_message_register_inbox_received(in_received_handler);
  
  window = window_create();
  window_stack_push(window, true);

  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_frame(window_layer);

  background_layer = text_layer_create(GRect(0, 10, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(background_layer));

  direction_layer = text_layer_create(GRect(0, 50, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(direction_layer));

  length_layer = text_layer_create(GRect(0, 90, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(length_layer));

  ipaddress_layer = text_layer_create(GRect(0, 130, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(ipaddress_layer));

  updateDisplay();
}

static void deinit(void) {
  text_layer_destroy(background_layer);
  text_layer_destroy(direction_layer);
  text_layer_destroy(length_layer);
  text_layer_destroy(ipaddress_layer);
  window_destroy(window);

  // call autoconfig deinit
  autoconfig_deinit();
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
