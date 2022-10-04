"use strict";

// 5
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

// Or use a wrapper function, an arrow to be concise:
askPassword(
  () => user.login(true),
  () => user.login(false)
);
// Now it gets user from outer variables and runs it the normal way.
