// console.log(document.body);
// console.log(document.documentElement);

// childNodes
// console.log(document.body.childNodes); // узлы, которые являются детьми body

// console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode); // путешествие по DOM
console.log(document.querySelector('#current').parentElement);

// data-атрибуты

// ПОЛУЧЕНИЕ
console.log(document.querySelector('[data-current="3"]').nextSibling); // получение следующего соседа
console.log(document.querySelector('[data-current="3"]').previousSibling); // получение предыдущего узла
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // переход к следующему элементу

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

