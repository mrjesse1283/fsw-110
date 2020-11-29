/* jshint esversion: 6*/

/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

let output = document.getElementById("output");


window.addEventListener("keypress", function(e) {
    const showKey = e.key + ", code for the key is: " + e.keyCode;
    output = "Key I pressed: " + showKey;
    document.body.append(output);
});