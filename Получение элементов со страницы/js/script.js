'use strict';

// получение по id
const box = document.getElementById('box');
console.log(box);

// получение по тэгу коллекции
const btns = document.getElementsByTagName('button');
console.log(btns); // получение всех элементов с тэгом button

// получение элемента по индексу
const btns2 = document.getElementsByTagName('button')[1]; 
console.log(btns2); // получение второй кнопки со страницы

// другой способ
/* const btns = document.getElementsByTagName('button'); это коллекция или псевдомассив
   console.log(btns[1]); это доступ к конкретному элементу 
 */

// получение элемента по классу
const circles = document.getElementsByClassName('circle');
console.log(circles); // получение коллекции элементов с классом circle

// доступ к элементу по селектору - удобнее 
const hearts = document.querySelectorAll(".heart"); // точки при указании класса обязательна
hearts.forEach(item => {
    console.log(item);
});

// позволяет получить первый элемент со страницы
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
