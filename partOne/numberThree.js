/* Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;
*/

console.log(' ');
console.log('Задание 3');

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let distanceFirst = speedOfFirst * time;
let distanceSecond = speedOfSecond * time;

let distanceEachOther = distanceSecond - distanceFirst;
console.log('Pасстоянии находятся города друг от друга' + distanceEachOther);
