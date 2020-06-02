"use strict";

// создание и вызов функции
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // локальная переменная
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

// локальные переменные
function showMessage() {
    let message = "Привет, я JavaScript!";
    alert(message);
}
showMessage(); // "Привет, я JavaScript!"
// alert(message); // Ошибка, так как переменная видна только внутри функции

// глобальные переменные
let userName = "Вася";
function showMessage() {
    userName = "Петя"; // изменение значения глобальной переменной
    let message = 'Привет, ' + userName;
    console.log(message);
}
console.log(userName); // Вася, так как перед вызовом функции 
showMessage();
console.log(userName); // Петя, так как значение было измененено в теле функции

////////////////////////////////////
let user = "Вася";
function showMessage() {
    let user = "Дима"; // объявление локальной переменной 
    let text = "Привет, " + user;
    console.log(text);
} // Функция создаст и будет использовать свою собственную локальную переменную user
showMessage(); //Привет, Дима
console.log(user); // Вася, т.к. функция не трогала внешнюю переменную.

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
console.log(from); // Оля

//
function showMessage(from, text = "текста пока нет") {
    console.log(from + ": " + text);
}
showMessage("Аня");


// Возврат значения
function calc(a,b) {
    return(a + b);
}

console.log(calc(4,3));
console.log(calc(7,8));

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
// const calc = (a,b) => a + b;

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
    let result = x; // 2
    for (let i = 1; i < n; i++) { // до 4
        result *= x; // result = result * x
        console.log(result);
    }
    return result;
}
console.log(pow(2,4));

//////////////////////////////////////////////////////////////////////

// 01.06.2020 Function Exprassion (learn.javascript.ru)

function sayHi() {       // это Function Declaration (объявление функции) 
    console.log("hello");
}
sayHi();
// console.log(sayHi); // выведет код функции
let func = sayHi; // копирование функции
func(); // вызов копии функции 

// let sayHi = function() { // это Function Exprassion (Функциональное выражение) 
//     console.log("hello");
// };

// смысл верхниъ функций одинаков - создание функции и ее помещение в переменную sayHi

// callback-функции

function first() {
    //Do something
    setTimeout(function () {
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

////// 01.06.2020
function ask(question, yes, no) {
    if(confirm(question)) yes()
     else no();
    
}
function showOk() {
    alert("Вы согласны");
}
function showCancel() {
    alert("Вы отменили выполнение");
}

ask("Вы согласны?", showOk, showCancel);

// 02.06.2020 - стрелочные функции
let Sum = (a,b) => a+b;

/* Более короткая форма для:
let Sum = function(a,b) {
    return a+b;
}; */
console.log(Sum(1,2));
