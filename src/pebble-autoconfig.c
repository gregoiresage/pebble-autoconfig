#include <pebble.h>
#include "autoconfig.h"

#define SETTING_COUNT 4

static Window *window;

static TextLayer *layer[SETTING_COUNT];
static char text[SETTING_COUNT][40];

static void updateDisplay() {
  snprintf(text[0], sizeof(text[0]), "Background: %s", getBackground() ? "true" : "false");
  snprintf(text[1], sizeof(text[1]), "Direction: %d", getDirection());
  snprintf(text[2], sizeof(text[2]), "Length: %d", (int)getLength());
  snprintf(text[3], sizeof(text[3]), "IP Address: %s", getIpaddress());

  for (int i = 0; i < SETTING_COUNT; ++i) {
    text_layer_set_text(layer[i], text[i]);
  }
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

  for (int i = 0; i < SETTING_COUNT; ++i) {
    layer[i] = text_layer_create(GRect(0, 10 + i*40, bounds.size.w, 28));
    layer_add_child(window_layer, text_layer_get_layer(layer[i]));
  }

  updateDisplay();
}

static void deinit(void) {
  for (int i = 0; i < SETTING_COUNT; ++i) {
    text_layer_destroy(layer[i]);
  }

  window_destroy(window);

  // call autoconfig deinit
  autoconfig_deinit();
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
