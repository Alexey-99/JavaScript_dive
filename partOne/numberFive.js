/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
 */

console.log(' ');
console.log('Задание 5');

let randomNumber2 = Math.floor(Math.random() * 100);
console.log(randomNumber2);

switch (true) {
  case randomNumber2 < 20:
    console.log('randomNumber меньше 20');
    break;
  case randomNumber2 > 50:
    console.log('randomNumber больше 50');
    break;
  default:
    console.log('randomNumber больше 20, и меньше 50');
    break;
}
