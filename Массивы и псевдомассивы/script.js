"use strict";

const arr = [13, 2, 10, 6, 26];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) { // сортировка чисел по возрастанию 
    return(a-b);
}
// методы, которые работают с концом массива
// arr.pop(); // удаляет последний элемент массива
// console.log(arr);
// arr.push(10); // добавляет элемент в конец массива
// console.log(arr);

// перебор массива
for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}
// for of - другой вид перебора
for (let value of arr) { // проходит по значениям, но не предоставляет доступ к номеру текущего объекта
    console.log(value); 
}

// свойство length и его особенности. Оно вычисляется как порядковый номер последнего элемента + 1
// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// метод forEach
// const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, i, arr) { // метод проходит по каждому элементу массива и применяет для него функцию
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); // item - значение каждого элемента массива; i - порядковый номер элемента; arr - ссылка на массив

// метод forEach не останавливает и не пропускают итерацию. Цикл for of это умеет!


// метод сплит - создание массива на основании строк
const str = prompt("","");
const products = str.split(", ");
products.sort(); // метод sort - сортирует массив как строки 
console.log(products.join('; ')); // метод join - создание строки из массива

////////////////////////////////////////////////////////////////////////////////////
// Объявление
let fruits = ["Яблоко", "Апельсин", "Слива"];
fruits[2] = "Грушка";
console.log(fruits); // переименование элемента массива
fruits[3] = "Банан";
console.log(fruits); // добавление нового элемента 

// в массиве могут храниться данные любого типа
let Arr = ["яблоко", {name: "Джон"}, true, function() {alert('Привет');}];
console.log(Arr[1].name);

// висячая запятая
let Fruits = ["Яблоко", "Дыня", "Арбуз", "Манго",]; 
// методы, работающие с началом массива
console.log(Fruits.shift());

let fruitS = ["Яблоко"];
fruitS.push("Апельсин", "Дыня");
fruitS.unshift("Ананас, Лимон");
console.log(fruitS);

let arr1 = ["Банан"];
let arr2 = arr1; // копируется по ссылке. Две переменные ссылаются на один и тот же объект
console.log(arr1 == arr2); // true
arr2.push("Арбуз"); // массив меняется по ссылке
console.log(arr1);

// перезаписывание свойства length
let array = [1, 2, 3, 4, 5, 6];
array.length = 2;
console.log(array);
array.length = 6;
console.log(array[4]); // undefined 
// очистить массив: .length = 0

// многомерные массивы
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][1]);

// ЗАДАНИЯ
let styles = ["Джаз", "Блюз"];
styles.push("Рон-н-ролл");
styles[1] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);



