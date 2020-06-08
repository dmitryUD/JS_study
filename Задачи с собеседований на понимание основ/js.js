// Какое будет выведено значение: let x = 5; alert(x++);
/* let x = 5;
alert(x++); // 5 
alert(++x); // 6 */

// #2 чему равно?
console.log([] + false - null + true);
console.log(typeof ([] + false)); // string ("false")
console.log([] + false - null); // NaN
console.log([] + false - null + true); // NaN

// #3
let y = 1;
let x = y = 2;
console.log(x); // выведет 2

// #4 чему равна сумма
console.log([] + 1 + 2); // "12"
console.log(typeof([] + 1 + 2)); // string

// #5
alert("1"[0]); // 1
alert("1"[2]); // undefined

// #6
console.log(2 && 1 && null && 0 && undefined); // null

// #7 Есть ли разница между выражениями? 
console.log(!!(1 && 2));
console.log((1 && 2));

console.log(!!(1 && 2) === (1 && 2));
/* 1) !!(1 && 2) выдаст true
   2) (1 && 2) выдаст 2
   3) === сравнивает типы данных, поэтому выдаст false
*/

// примеры

// Первый аргумент - true,
// Поэтому возвращается второй аргумент
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// Первый аргумент - false,
// Он и возвращается, а второй аргумент игнорируется
console.log(null && 5); // null
console.log(0 && "не важно"); // 0

// #7
console.log(null || 2 && 3 || 4);
/* 1) 2 && 3 = 3
   2) null || 3 = 3 (ИЛИ запинается на true)
   3) 3 || 4 = 3 (ИЛИ запинается на true) 
*/

// #8: a = [1,2,3]; b = [1,2,3]. Правда ли что a == b?
const a = [1, 2, 3]; 
const b = [1, 2, 3];

// a не равно b.Это абсолютно разные хранилища
console.log( a == b); 

// #9 
console.log(+"Infinity");
console.log(typeof(+"Infinity"));

// #10
console.log("Ёжик" > "яблоко"); // посимвольное сравнение. Смотри в unicode

// #11
console.log(0 || "" || 2 || undefined || true || false);
/* 1) 0 || "" выведет false
   2) false || 2 выведет 2
   3) так как в выражении все ||, то выведется 2
*/






