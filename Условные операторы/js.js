// оператор if
// let year = prompt("В каком году родился Дмитрий Удовик?");
// if (year == 2001) {
//     alert("Правильно!");
// } else {
//     alert("Вы лоханулись!");
// }

// несколько условий
// let year1 = prompt("В каком году родилась Ольга Удовик?");
// if (year1 < 1970) {
//     alert("Слишком рано!");
// } else if (year1 > 1970) {
//     alert("Это слишком поздно!");
// } else {
//     alert("Верно!");
// }

// конструкция switch - работает только на строгое сравнение 
const num = 50;
switch(num) {
    case 49:
        console.log("Неверно");
        break;
    case 100: 
        console.log("Неверно");
        break;
    case 51:
        console.log("В точку!");
        break;
    default: 
        console.log("Не в этот раз");
        break;
}
// Условный оператор "?" или тернарный оператор 
// let result = условие ? значение1 : значение2
// let accessAllowed;
// let age = prompt("Сколько вам лет?");
// if (age >= 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);
// let age = prompt("Сколько вам лет?");
// let accessAllowed = (age > 18) ? true : false;

// НЕСКОЛЬКО ОПЕРАТОРОВ "?"
// let age = prompt("Возраст?", '');
// let message = (age < 3) ? "Здравствуй, малыш!" : 
//     (age < 18) ? "Привет!" :
//     (age < 100) ? "Здравствуйте!" :
//     "Какой необычный возраст!";
// alert(message);
// if else
// let age = prompt("Возраст?", '');
// if (age < 3) {
//     alert("Здравствуй, малыш!");
// } else if (age < 18) {
//     alert("Привет!");
// } else if (age < 100) {
//     alert("Здравствуйте!");
// } else {
//     alert("Какой необычный возраст!");
// }

// НЕТРАДИЦИОННОЕ ИСПОЛЬЗОВАНИЕ ?
// let company = prompt("Какая компания создала JS?");
// (company == "Netscape" || company == "netscape") ? 
//     alert("Верно!") : alert("Неверно!");

// ЗАДАНИE №1
// let answer = prompt("Какое официальное название JavaScript?", '');
// if (answer == "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript");
// }

// ЗАДАНИЕ №2
// let number = prompt("Введите число", '');
// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else if (number == 0) {
//     alert(0);
// }

// Задание №3
// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");
// let result = (a+b < 4) ? alert("Мало") : alert("Много");

// Задание №4
let login = prompt("Введите логин");
let message = (login == "Сотрудник") ? alert("Привет") :
    (login == "Директор") ? alert("Здравствуйте") :
    (login == "") ? alert("Нет логина") :
    alert("ты кто такой?");

