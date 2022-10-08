"use strict";

// EventMixin

// Now let’s make a mixin for real life.

// An important feature of many browser objects (for instance) is that they can generate events. Events are a great way to “broadcast information” to anyone who wants it. So let’s make a mixin that allows us to easily add event-related functions to any class/object.
// * The mixin will provide a method .trigger(name, [...data]) to “generate an event” when something important happens to it. The name argument is a name of the event, optionally followed by additional arguments with event data.
// * Also the method .on(name, handler) that adds handler function as the listener to events with the given name. It will be called when an event with the given name triggers, and get the arguments from the .trigger call.
// * …And the method .off(name, handler) that removes the handler listener.

// After adding the mixin, an object user will be able to generate an event "login" when the visitor logs in. And another object, say, calendar may want to listen for such events to load the calendar for the logged-in person.
// Or, a menu can generate the event "select" when a menu item is selected, and other objects may assign handlers to react on that event. And so on.

let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and data
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // no handlers for that event name
    }

    // call the handlers
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};

/*

* .on(eventName, handler) – assigns function handler to run when the event with that name occurs. Technically, there’s an _eventHandlers property that stores an array of handlers for each event name, and it just adds it to the list.
* .off(eventName, handler) – removes the function from the handlers list.
* .trigger(eventName, ...args) – generates the event: all handlers from _eventHandlers[eventName] are called, with a list of arguments ...args.

*/

// Usage:

// Make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", (value) => alert(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");

// Now, if we’d like any code to react to a menu selection, we can listen for it with menu.on(...).

// And eventMixin mixin makes it easy to add such behavior to as many classes as we’d like, without interfering with the inheritance chain.
