'use strict';

let num = 50; 
while (num<=55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num<55);

let i = 3;
while (i) {
    console.log(i);
    i--;
}

// цикл for 

for (let i=1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue; // пропустить вывод i = 6. Переход к следующей итерации 
    }
    console.log(i);
}

// let sum = 0;
// while(true) {
//     let value = +prompt("Введите число","");
//     if (!value) {
//         break;
//     }
//     sum += value;
// }
// alert("Сумма: " + sum);

// // вывод нечетных чисел 
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

// вложенные циклы
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i}, ${j})`, '');
        console.log(`Координата: (${i},${j}) имеет значение ` + input);
    }
}

////////////////////////////////////////////////////////////////
// outer: for(let i = 0; i<3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//         if (!input) {
//             break outer;
//         }
//     }
// }
// alert("Готово!");
////////////////////////////////////////////////////////////////
// задания
// let i = 0;
// while (++i < 5) {
//     console.log(i);
// }

// let j = 0;
// while (j++ < 5) {
//     console.log(j);
// }

// for
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; ++i) {
//     console.log(i);
// }

////////////////////////////////////////
// for (let i = 2; i < 21; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// замена for на while
// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

//
// let number = +prompt("Введите число, которое больше 100", '');
// while (number < 100) {
//     let number = +prompt("Введите число, которое больше 100", '');
//     if (!number) {
//         alert("Вы ничего не ввели!");
//         break;
//     } 
// }
// if (number > 100) {
//     alert("Вы ввели число, которое больше 100!");
// }

//
// let n = +prompt("Введите число");
// next:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             continue next;
//         }
//     }
//     alert(i);
// }

// метки для break/continue




