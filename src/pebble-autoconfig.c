#include <pebble.h>
#include "autoconfig.h"

static Window *window;

static void in_received_handler(DictionaryIterator *iter, void *context) {
  // call autoconf_in_received_handler
  autoconf_in_received_handler(iter, context);

  // here the new settings are available
  APP_LOG(APP_LOG_LEVEL_DEBUG, "in_received_handler select:%d slider:%d switch:%d", getMyselect(), (int)getMyslider(), getMyswitch());

  //update display
}

static void init(void) {
  // call autoconf init (load previous settings and register app message handlers)
  autoconf_init();

  // here the previous settings are already loaded
  APP_LOG(APP_LOG_LEVEL_DEBUG, "init select:%d slider:%d switch:%d", getMyselect(), (int)getMyslider(), getMyswitch());

  //override autoconfig in_received_handler (if something must be done when new settings arrive)
  app_message_register_inbox_received(in_received_handler);
  
  
  window = window_create();
  window_stack_push(window, true);
}

static void deinit(void) {
  window_destroy(window);

  // call autoconf deinit
  autoconf_deinit();
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
