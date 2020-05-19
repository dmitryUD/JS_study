"use strict";

// передача по значению. 
let a = 5, 
    b = a;
b = b + 5;
console.log(b);
console.log(a);

// // При работе с объектами происходит передача по ссылке. 
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // кладется ссылка на уже существующий объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// клонирование объекта
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy; // возврат наружу
} 

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }, // тут важна запятая!!!
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10; 
console.log(newNumbers);
console.log(numbers);

// метод Object.assign()
const add = { 
    d: 17,
    e: 20
};
const clone = Object.assign({}, add);
clone.d = 20;
// console.log(add);
// console.log(clone);

// копирование массива
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // метод, позволяющие скопировать старый массив
newArray[1] = "adadadasd";
console.log(newArray);
console.log(oldArray);

// ES6 ES8. Оператор разворота Spread
const video = ["youtube", "vimeo", 'rutube'],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"]; // сюда нужно сложить все значения из двух предыдущих массивов
console.log(internet);

//
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num =[2,5,7];
log(...num);

// 4-ы способ создания копий объектов
const array = ["a", "b"];
const newAarray = [...array];

//
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);

