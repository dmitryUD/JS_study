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
const num = 51;
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
// пример без break 
let a = 3+5;
switch(a) {
    case 2:
        console.log("Маловато");
        break;
    case 8:
        console.log("Верно!");
    case 12: 
        console.log("На 4 больше!!!");
    case 6:
        console.log("На 2 меньше!");
} 
// любое выражение может быть аргументом для switch/case
let b = "1";
let c = 0;
switch(+b) {
    case c+1:
        console.log("Выполнится, так как c+1 = +b");
        break;
    default:
        console.log("Это не выполнится");
}

// группировка case 
let d = 2+2;
switch(d) {
    case 4: 
        console.log("Правильно!");
        break;
    case 5:
    case 3:
        console.log("Неверно!");
        console.log("Вообще неверно!");
        break;
}
// ЗАДАНИЯ ПО SWITCH
let browser = "Firefox";
if (browser == "Edge") {
    console.log("You've got the Edge");
} else if (browser == "Chrome" 
    || browser == "Firefox" 
    || browser == "Safari" 
    || browser == "Opera") {
    console.log("Okay we support these browsers too");
} else {
    console.log("We hope that this page looks ok!");
}

const number = +prompt("Введите число от 0 до 3");
switch(number) {
    case 0:
        alert("Вы ввели 0");
        break;
    case 1:
        alert("Вы ввели 1");
        break;
    case 2 || 3:
        alert("Вы ввели 2 или 3");
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
// let login = prompt("Введите логин");
// let message = (login == "Сотрудник") ? alert("Привет") :
//     (login == "Директор") ? alert("Здравствуйте") :
//     (login == "") ? alert("Нет логина") :
//     alert("ты кто такой?");

