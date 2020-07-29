'use strict';

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a+b;
    }
    console.log(sum());
}
showThis(4,5);
//========================================
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this); // window or undfined. это не метод объекта
        }
        shout();
    }
};
obj.sum();

//========================================
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("hello" + this.name);
    };
}
let ivan = new User('Ivan', 23);

//========================================
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John',
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

//=========================================
function count(num) {
    return this*num;
}

const double = count.bind(2); // создание новой функции через bind
console.log(double(3));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// контекст вызова this - сам элемент. (при классическом вызове функции) 
btn.addEventListener('click', function() {
    console.log(this); // = e.target
    this.style.backgroundColor = 'red';
    this.style.width = '200px';
    this.style.height = '100px';
});

// у стрелочной функции нет своего контекста вызова
const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // берет контекст у родителя - объекта
        };
        say();
    }
};

object.sayNumber();

//=========================================

const Double = a => a*2;
console.log(Double(4));

/////////////////////////
function hello() {
    console.log('Hello', this);
}
hello();

const person = {
    name: 'Дима',
    age: 19,
    sayHello: hello,
    sayHelloWindow: hello.bind(window), // можно this, можно document
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name: "Елена",
    age: 22,
};

// можно так
const fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog('Web', '89994567854');

// а можно так
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Web', '89994567854');
// fnLenaInfoLog();

// а можно и вот так
// person.logInfo.bind(lena, 'Web', '89994567854')();

// МЕТОД CALL
// person.logInfo.call(lena, 'Web', '89994567854');

// МЕТОД APLLY
// person.logInfo.apply(lena, ['Web', '89994567854']);

// =====================================
const array = [1, 2, 3, 4, 5];

function multBy(n, arr) {
    return arr.map(function(i) {
        return i*n;
    });
}

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
         return i*n;
    });
};

console.log(array.multBy(2));

//======================================






