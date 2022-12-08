"use strict";
//functions
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toLowerCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(2);
getUpper("Shehzad");
signUpUser("Shehzad", "shehzuali5@gmail.com", false);
loginUser("shehzu", "shzu@ggmail.com");
var getHello = function (s) {
    return " ";
};
// const heros = ["2", "b", "c"];
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is " + hero;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
