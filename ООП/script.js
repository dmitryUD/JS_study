"use strict";

// ООП
let str = "some"; // примитив
let strObj = new String(str); // превращение сперва в объект, а затем обратно в примитив
// при применении метода к значению переменная превращается в объект - уже не примитив
console.log(strObj);
console.log(typeof(str));
console.log(typeof(strObj));

////////////////////////////////
console.dir([1,2,3]);
console.dir({num: 0, str: "cool!"});

////////////////////////////////
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    },
};

const john = {
    health: 100,
};

// const john = Object.create(soldier); // создаем объект john, который будет прототипно наследоваться от soldier для доступа к методам, функциям и свойствам


// john.__proto__ = soldier; // устаревший формат. Прототип Джона - солдат
Object.setPrototypeOf(john, soldier); // аналогично устаревшему формату

console.log(john.armor);
john.sayHello();

////////////////////////////////
let one = {
    number: 111,
    car: 43,
    action: function() {
        console.log("Успех");
    },
};

let two = Object.create(one);
console.log(two.action());

let three = {};
Object.setPrototypeOf(three,two);
console.log(three.number);