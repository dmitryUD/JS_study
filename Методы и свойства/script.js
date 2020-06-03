"use strict";

// СТРОКИ
const str = "test";
console.log(str.length); // свойство пишется через точку (не вызывается)
/* console.log(str[2]);
console.log(str[2] = "d"); // попытка поменять 3 символ (неудача)
console.log(str); */

// методы изменения регистра
console.log(str.toUpperCase()); // верхний регист. Выводит новое значение, не изменяя старое 
console.log(str.toLowerCase()); // 

// другой метод - позволяет узнать индекс символа в скобках (поиск подстроки)
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // показывает, с какого индекса начинается символ
console.log(fruit.indexOf("q")); // -1 - означает, что символ не найден 
console.log(fruit.indexOf("u")); 

// методы, изменяющие строки - их 3
let logg = "Hello World!";
console.log(logg.slice(6,10)); // позволяет вернуть символы заданным промежутком (с 6 до 9, включая 9)
console.log(logg.slice(0,5));
// console.log(logg.slice(1,6));
console.log(logg.slice(6)); // вырезать все символы, начиная с 6
console.log(logg.substr(6,3)); // 2-ой аргумент - длина вырезаемых символов

let text = "Я стану предпринимателем!";
console.log(text.slice(2));
console.log(text.slice(-17,-1));
console.log(text.substring(6,11)); // не поддерживает отрицательные значения!

let On = "Оксимирон";
let Of = On.slice(4);
console.log(Of);

// методы чисел
const num = 12.4;
console.log(Math.round(num)); // округление числа к ближайшему целому

const test = "12.2px";
console.log(parseInt(test)); // преобразование строки в целое число 
console.log(parseFloat(test)); // преобразование строки в нецелоев число 

let Test = "pxx";
console.log(parseInt(Test)); // NaN
