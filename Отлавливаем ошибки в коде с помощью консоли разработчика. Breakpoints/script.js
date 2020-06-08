"use strict";

function hello() {
    console.log("Hello, world!");
}
hello();

function hi() {
    console.log("Hi, man!");
}
hi();

//
const arr = [1, 44, 32, 99, 9],
      sorted = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(sorted);