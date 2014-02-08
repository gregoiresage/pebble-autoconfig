#include <pebble.h>
#include "autoconfig.h"

static Window *window;

static void in_received_handler(DictionaryIterator *iter, void *context) {
  // call autoconf_in_received_handler
  autoconf_in_received_handler(iter, context);

  APP_LOG(APP_LOG_LEVEL_DEBUG, "in_received_handler display:%d favourite:%d", (int)getDisplay(), (int)getFavourite());
}

static void init(void) {
  // call autoconf init
  autoconf_init();
  
  window = window_create();

  //override autoconfig in_received_handler
  app_message_register_inbox_received(in_received_handler);

  const bool animated = true;
  window_stack_push(window, animated);

  APP_LOG(APP_LOG_LEVEL_DEBUG, "init display:%d favourite:%d", (int)getDisplay(), (int)getFavourite());
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
