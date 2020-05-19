"use strict";

// свойство - это пара ключ-значение. Ключ - строка; значение - любой тип данных

let user = {
    name: "John",
    age: 30,
    // имя свойства может состоять из нескольких свойств, однако тогда оно должно быть заключено в кавычки
    "likes birds": true, // последнее свойство объекта может заканчиваться запятой
};
// console.log(user.name);
// добавление свойства
user.isAdmin = true;
// console.log(user);
// удаление свойства
delete user.age;
// console.log(user);

// альтернативный способ доступа к свойствам
console.log(user["likes birds"]);

//
let key = prompt("Что вы хотите узнать?","name");
console.log(user[key]); // John, если ввели name

// 
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, background} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// // delete
// delete options.name;
// console.log(options);

//
let counter = 0; 
for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        // counter++;
    }
}
console.log(counter);
//////////////////////////////////////////////////////////////////////////////
// Вычисляемые свойства
let fruit = "apple"; // или можно запросить фрукт через prompt()
let bag = {
    [fruit]: 5
};
console.log(bag.apple);

// немного сложнее
let Fruit = "apple";
let Bag = {
    [Fruit + "computers"]: 999
};
console.log(Bag);

// Свойство из переменной 
function makeUser(name, age) {
    return {
        name, // то же самое, что и name: name
        age, // то же самое, что и age: age
    };
}
let user = makeUser("John",30);
console.log(user.name);

// ограничения на имена свойств
let obj = {
    0: "test", // то же самое, что и "0": "test"
};
console.log(obj[0]);
console.log(obj["0"]);

// зарезервированные имена можно использовать в качестве имен свойств
let Obj = {
    let: 1,
    for: 2,
    return: 3,
};
console.log(Obj.let + Obj.for + Obj.return);

///////////////////////////////////////////////////////////////////////
// Проверка существования свойства, оператор in
//
let user = {};
console.log(user.noSuchProperty === undefined);

// слева от оператора in должно быть имя свойства
let user = {
    name: "John",
    age: 30,
};
console.log("name" in user);
console.log("blabla" in user);

// если опустить кавычки, это значит, что мы указываем переменную, в которой находится имя свойства
let user = {age : 30};
let key = "age";
console.log(key in user);

//
let obj = {
    test: undefined
};
console.log(obj.test);
console.log("test" in obj);

// цикл for ..in
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};
for (let key in user) {
    //console.log(key); // ключи или имена
    //console.log(user[key]); // значения 
    console.log(`Ключ ${key} имеет значение ${user[key]}`);
}
///////////////////////////////////////////////////////////////
// упорядочение свойств объекта 
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    "1" : "США",
};
for (let code in codes) {
    console.log(code);
}

// 
let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // добавление еще одного свойства

// нецелочисленные свойства перечисляются в порядке создания
for (let prop in user) {
    console.log(prop);
}

// обхитрить 
let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США",
};
for (let code in codes) {
    console.log(code);
}

// копирование по ссылке
let message = "Hello";
let phrase = message;
console.log(phrase);

// ОБЪЕКТ. Переменная ханит не сам объект, а его адрес в памяти (ссылку на него)
let user = {
    name: "John",
}
// сам объект хранится в памяти, а в переменной user лежит ссылка на эту область памяти

// когда переменная объекта копируется - копируется сама ссылка, объект не дублируется
let User = {name:"John"};
let Admin = User; // копируется ссылка
console.log(Admin);

// Демонстрирует, что объект только один!
let User = { name: "John" };
let Admin = User;
Admin.name = "Pete";
console.log(User.name);

// Два объекта равны только в том случае, если это один и тот же объект
let a = {};
let b = a; // копирование по ссылке 
console.log(a == b); // обе переменные ссылаются на один и тот же объект
console.log(a === b);

// два независимых объекта
let A = {};
let B = {};
console.log(A == B);
console.log(A === B);

// объекты-константы
// объект, объявленный через CONST, может быть изменен
const user = {
    name: "John"
};
user.age = 25;
console.log(user);

// клонирование и объединение объектов. Object.assign
let user = {
    name: "John",
    age: 30
};
let clone = {}; // новый пустой объект
// копирование всех свойств user в clone
for (let key in user) {
    clone[key] = user[key];
}
console.log(clone);
// в переменной clone находится абсолютно независимый клон объекта 
// изменение данных
clone.name = "Pete";
console.log(user.name);

// метод Object.assign

// объединение нескольких объектов в один
let user = {name:"John"};
let permission1 = {canView: true};
let permission2 = { canEdit: true };
Object.assign(user, permission1, permission2); // копирование свойств из permission 1 и permission2
console.log(user);

// перезаписывание свойства name и добавление свойства isAdmin 
let user = {name: "John"};
Object.assign(user, {name: "Pete", isAdmin: true});
console.log(user);

// клонирование
let user = {
    name: "John",
    age: 30
};
let clone = Object.assign({}, user);
console.log(clone);

// 
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log(user.sizes.height);

// ЗАДАНИЯ
// #1
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

// #2
function isEmpty(obj) {
    for(let key in obj) {
        // если тело цикла начнет выполняться - в объекте есть свойства
        return false;
    }
    return true;
}
console.log(isEmpty());

// #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
// console.log("Сумма всех зарплат равна:", salaries.John+salaries.Ann+salaries.Pete);
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// #4
let menu = {
    width: 200,
    height: 300
};
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        }
    }
    console.log(menu);
}
multiplyNumeric();

