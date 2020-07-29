// остановить вывод через 5 секунд
// setTimeout(() => {clearInterval(timerId); alert('stop');},5000);


// тождественны

// let timerId = setInterval(() => alert("tick"), 1000);


// let timer = setTimeout(function tick() {
//     alert('tick');
//     timer = setTimeout(tick, 2000);
// }, 2000);


// Задача #1
// const timer = setInterval(printNumber, 1000);

// function printNumber(from, to) {
//     from = 1;
//     to = 10;
//     for (i = from; i <= to; i++) {
//         alert(i);
//         if (i === to) {
//             clearInterval(timer);
//         }
//     }
// }

function printNumber(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    },1000);
}
printNumber(5,10);

// другая версия
function printNumber(from, to) {
    let current = from; 
    
    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go,1000);
        }
        current++;
    }, 1000);
}
printNumber(5, 10);




