"use strict";

// setInterval

// The setInterval method has the same syntax as setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.
// To stop further calls, we should call clearInterval(timerId).

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds
let timerId2 = setInterval(() => console.log("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId2);
  console.log("stop");
}, 5000);

// Time goes on while alert is shown
// In most browsers, including Chrome and Firefox the internal timer continues “ticking” while showing alert/confirm/prompt.
// So if you run the code above and don’t dismiss the alert window for some time, then the next alert will be shown immediately as you do it. The actual interval between alerts will be shorter than 2 seconds.
