'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
//    hearts = wrapper.querySelectorAll('.heart'), // поиск элемента с селектором heart внутри wrapper
      hearts = document.querySelectorAll('.heart'),
//    oneHeart = wrapper.querySelector('.heart'),
      oneHeart = document.querySelector('.heart');
      

// console.dir(box); // просмотреть все свойства и методы объекта

// inline-стили перебивают стили CSS
// box.style.backgroundColor = "blue"; // задание inline-стиля
// box.style.width = '500px'; // задание inline-стиля

box.style.cssText = 'background-color: blue; width: 500px'; // задание несколько стилей для элемента

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red'; // нужно обращаться к конкретному элементу, а не к псевдомассиву

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

// задание цвета всем сердцам 
hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

// методы 
const div = document.createElement('div'); // создается только в JS, на странице не появится. Внутрь помещается название тэга, который создается
// const text = document.createTextNode('Тут был я'); // создает текстовые узлы. Используется редко
div.classList.add('black'); // добавление класса к элементу div

wrapper.append(div); // добавление созданного элемента div в конец страницы 
// wrapper.appendChild(div); // УСТАРЕВШАЯ КОНСТРУКЦИЯ 

// wrapper.prepend(div); // вставить в начало родителя элемент div 

// hearts[0].before(div); // вставить элемент div перед первым сердечком
// hearts[0].after(div); // вставить элемент div после первого сердечка
// wrapper.insertBefore(div, hearts[0]); // вставить элемент div перед элементом hearts[0] (СТАРЫЙ)

// circles[0].remove(); // удалить первый элемент псевдомассива circles
// wrapper.removeChild(hearts[1]); // тот же метод, но старый

// hearts[0].replaceWith(circles[0]); // заменить первое сердце первым кружком
// wrapper.replaceChild(circles[0], hearts[0]); // устаревший метод

// div.innerHTML = "Hello, World!"; // вставить текст в блок div 
div.innerHTML = "<h1>Hello, World!</h1>"; // создание h1 с текстом - много возможностей
// div.textContent = "Hello"; // этим методом тэги вставлять нельзя - только текст!
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставляет h2 перед div 
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставить h2 в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставить h2 в конец элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставить h2 после элемента

