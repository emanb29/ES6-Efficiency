"use strict";

var p = 0;
var q = 1;
//let declaration
function nextFibo() {
    var _ref = [q, p + q];
    p = _ref[0];
    q = _ref[1];

    return q;
}
var fibs = [];
while (true) {
    var n = nextFibo();
    if (n > 10000) break;
    fibs.push(n);
}
var fib1 = fibs[0];
var fib3 = fibs[2];
var therest = fibs.slice(3);
//deconstructor and spread
var halfTheRest = therest.map(function (x) {
    return x / 2;
}); //arrow function
