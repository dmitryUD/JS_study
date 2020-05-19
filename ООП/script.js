"use strict";

// ООП
let str = "some"; // примитив
let strObj = new String(str); // превращение сперва в объект, а затем обратно в примитив

// console.log(typeof(str));
// console.log(typeof(strObj));

////////////////////////////////
console.dir([1,2,3]);

////////////////////////////////
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    },
};

const john = Object.create(soldier); // создаем объект john, который будет прототипно наследоваться от soldier для доступа к методам, функциям и свойствам

// const john = {
//     health: 100,
// };

// john.__proto__ = soldier; // устаревший формат
// Object.setPrototypeOf(john, soldier); // аналогично усторевшему формату

// console.log(john);
john.sayHello();

////////////////////////////////
