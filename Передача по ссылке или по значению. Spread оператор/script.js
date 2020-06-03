"use strict";

// передача по значению. 
let a = 5, 
    b = a;
b = b + 5;
console.log(b); // 10
console.log(a); // 5

// // При работе с объектами происходит передача по ссылке. 
const obj = {
    a: 5,
    b: 1
};
const copy = obj; // кладется ссылка на уже существующий объект
copy.a = 10; // изменяем значение в ссылке 
console.log(copy); 
console.log(obj);

// клонирование объекта
function Copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]; // перебор элементов уже существующего объекта и их помещение в новый объект
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

const newNumbers = Copy(numbers); // создали копию 
newNumbers.a = 10;
newNumbers.c.x = 10; // x поменяется в двух объектах. Глубокие и поверхностные копии объекта 
console.log(newNumbers);
console.log(numbers);

// метод Object.assign() - соединение объектов
const add = { 
    d: 17,
    e: 20
};
const clone = Object.assign(numbers, add); //1-ый аргумент: в какой нужно поместить, 2: который помещаем
clone.d = 20;
// console.log(add);
console.log(clone);

// Object.assign() - копирование объекта 
const oldObj = {
    r: 44,
    y: 3
};
let newObj = Object.assign({},oldObj);
newObj.z=22;
console.log(newObj);
console.log(oldObj);

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

// вывод элементов массива по отдельности - массив расщепляется на отдельные элементы
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

// 5-ый способ создаия копий объектов
const q = {
    one: 1,
    two: 2
};
const NewObj = {...q};
console.log(NewObj);

