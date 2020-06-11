'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() { // в реальных проектах тоже не используется
//     alert('Click');
// };

// правильное назначение обработчиков событий
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

// let i = 0;
const deleteElement = (e) => { // присваивание функции элементу
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); // удалить обработчик событий - на странице ничего не произойдет
    // }
};

// btn.addEventListener('click', deleteElement); // после клика выполнится функция
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// отмена стандартного поведения браузера
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // отмена стандартного поведения (перехода по ссылке)
    console.log(event.target);
});



