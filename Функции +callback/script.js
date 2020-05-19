"use strict";

// создание и вызов функции
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

// локальные переменные
// function showMessage() {
//     let message = "Привет, я JavaScript!";
//     alert(message);
// }
// showMessage(); 
// alert(message);

// глобальные переменные
let userName = "Вася";
function showMessage() {
    userName = "Петя";
    let message = 'Привет, ' + userName;
    console.log(message);
}
console.log(userName);
showMessage();
console.log(userName);
////////////////////////////////////
let user = "Вася";
function showMessage() {
    let user = "Дима";
    let text = "Привет, " + user;
    console.log(text);
}
showMessage();
console.log(user);

// Параметры или аргументы 
function showMessage(from,text) {
    console.log(from + ": " + text);
}
showMessage("Аня", "Привет");
showMessage("Дима", "Я бы тебе вдул");

//
function showMessage(from, text) {
    from = "*" + from + "*";
    console.log(from + ": " + text);
}
let from = "Оля";
showMessage("Оля", "Привет");
console.log(from);

//
function showMessage(from, text = "текста пока нет") {
    console.log(from + ": " + text);
}
showMessage("Аня");


// Возврат значения
// function calc(a,b) {
//     return(a + b);
// }

// console.log(calc(4,3));
// console.log(calc(7,8));

// // funcrion declaraion
// console.log(calc(9, 2));
// console.log(calc(8, 90));

// function calc(a, b) {
//     return (a + b);
// }

//
function sum(a,b) {
    return(a+b);
}
let result = sum(2,5);
console.log(result);

//
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return "А родители разрешили?";
    }
}
let age = prompt("Сколько Вам лет?");
if (checkAge(age)) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
}

///////////////////////////////////////////
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

///////////////////////////////////////////
// function expression
let logger = function() {
    console.log("Hello!");
};

logger();

/////////
const calc = (a,b) => a + b;

// задачи 
function checkAge(age) {
    return (age > 18) ? console.log(true) : confirm("А родители разрешили?"); 
}

// 
function min(a,b) {
    if (a>b) {
        return (b);
    } else {
        return (a);
    }
}
console.log(min(8,14));

// 
function pow(x,n) {
    return x**n;
}
console.log(pow(2,3));

//
function pow(x,n) {
    let result = x; 
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2,4));

//////////////////////////////////////////////////////////////////////
// callback-функции

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок");
}

learnJS("JavaScript", done);