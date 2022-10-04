"use strict";

// 4
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// An alternative solution could be:

//...
askPassword(
  () => user.loginOk(),
  () => user.loginFail()
);
// Usually that also works and looks good.

// It’s a bit less reliable though in more complex situations where user variable might change after askPassword is called, but before the visitor answers and calls () => user.loginOk().
