#include <pebble.h>
#include "autoconfig.h"

static Window *window;
static TextLayer *select_layer;
static TextLayer *slider_layer;
static TextLayer *switch_layer;
static TextLayer *string_layer;

static char select_string[20]="";
static char slider_string[20]="";
static char switch_string[20]="";
static char string_string[40]="";

static void in_received_handler(DictionaryIterator *iter, void *context) {
  // call autoconf_in_received_handler
  autoconfig_in_received_handler(iter, context);

  // here the new settings are available
  APP_LOG(APP_LOG_LEVEL_DEBUG, "in_received_handler select:%d slider:%d switch:%d string:%s", getMyselect(), (int)getMyslider(), getMyswitch(), getMystringconfig());

  //update display
  snprintf(select_string, sizeof(select_string), "select: %d", (int)getMyselect());
  text_layer_set_text(select_layer,select_string);
  snprintf(slider_string, sizeof(slider_string), "slider: %d", (int)getMyslider());
  text_layer_set_text(slider_layer,slider_string);
  snprintf(switch_string, sizeof(switch_string), "switch: %d", (int)getMyswitch());
  text_layer_set_text(switch_layer,switch_string);
  snprintf(string_string, sizeof(string_string), "string: %s", getMystringconfig());
  text_layer_set_text(string_layer,string_string);
}

static void init(void) {
  // call autoconfig init (load previous settings and register app message handlers)
  autoconfig_init();

  // here the previous settings are already loaded
  APP_LOG(APP_LOG_LEVEL_DEBUG, "init select:%d slider:%d switch:%d string:%s", getMyselect(), (int)getMyslider(), getMyswitch(), getMystringconfig());

  //override autoconfig in_received_handler (if something must be done when new settings arrive)
  app_message_register_inbox_received(in_received_handler);
  
  window = window_create();
  window_stack_push(window, true);

  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_frame(window_layer);

  select_layer = text_layer_create(GRect(0, 10, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(select_layer));

  slider_layer = text_layer_create(GRect(0, 50, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(slider_layer));

  switch_layer = text_layer_create(GRect(0, 90, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(switch_layer));

  string_layer = text_layer_create(GRect(0, 130, bounds.size.w /* width */, 28 /* height */));
  layer_add_child(window_layer, text_layer_get_layer(string_layer));

  snprintf(select_string, sizeof(select_string), "select: %d", (int)getMyselect());
  text_layer_set_text(select_layer,select_string);
  snprintf(slider_string, sizeof(slider_string), "slider: %d", (int)getMyslider());
  text_layer_set_text(slider_layer,slider_string);
  snprintf(switch_string, sizeof(switch_string), "switch: %d", (int)getMyswitch());
  text_layer_set_text(switch_layer,switch_string);
  snprintf(string_string, sizeof(string_string), "string: %s", getMystringconfig());
  text_layer_set_text(string_layer,string_string);
}

static void deinit(void) {
  text_layer_destroy(select_layer);
  text_layer_destroy(slider_layer);
  text_layer_destroy(switch_layer);
  text_layer_destroy(string_layer);
  window_destroy(window);

  // call autoconfig deinit
  autoconfig_deinit();
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
