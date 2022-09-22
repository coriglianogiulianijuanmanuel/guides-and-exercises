"use strict";

/* 
We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.

We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.
*/

let firstName = prompt("Please, enter your first name.", "");
let lastName = prompt("Please, enter your last name.", "");
let nickName = prompt("Please, enter your nickname.", "");

// shows the first defined value:
alert(`Welcome ${firstName ?? lastName ?? nickName ?? "Anonymous"}`);
