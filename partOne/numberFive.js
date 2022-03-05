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

let randomNumbera = Math.floor(Math.random() * 100);
console.log(randomNumber);

switch (randomNumbera) {
  case 20:
    console.log('randomNumber равен 20');
    break;
  case 50:
    console.log('randomNumber равен 50');
    break;
  default:
    console.log('randomNumber не 20, и не 50');
}
