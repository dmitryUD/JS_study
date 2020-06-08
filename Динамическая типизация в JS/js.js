"use strict";

// To String 

// #1 - старый способ
console.log(typeof (String(null))); // String превратила null в строку
console.log(typeof (String(444))); // String превратила 444 в строку

// #2 - конкатенация
console.log(typeof(5 + "")); // при сложении любых типов данных со строкой получается строка

const num = 5;
console.log("https://vk.com/catalog/" + num); // старый способ

const fontSize = 26 + 'px';

// To Number

// #1
console.log(typeof (Number("4")));

// #2 унарный плюс
console.log(typeof(+"444"));

// #3
console.log((parseInt("15px", 10)));
console.log(typeof (parseInt("15px", 10)));

// #4
let answer = +prompt("Hello", ""); // превращение ответа пользователя в число


// To boolean

// #1

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// #2
console.log(typeof(Boolean('4')));

// #3
console.log(typeof (!!'4'));

