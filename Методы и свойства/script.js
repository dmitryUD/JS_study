"use strict";

//
const str = "test";
// console.log(str.length);
// console.log(str[2]);

// методы изменения регистра
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// другой метод 
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));
console.log(fruit.indexOf("u"));

// методы, изменяющие строки - их 3
let logg = "Hello World!";
// console.log(logg.slice(6,11));
// console.log(logg.slice(0,5));
// console.log(logg.slice(1,6));
// console.log(logg.slice(6));
console.log(logg.substr(6,3));

let text = "Я стану предпринимателем!";
console.log(text.slice(2));
console.log(text.slice(-17,-1));
console.log(text.substring(6,11));

// методы чисел
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
