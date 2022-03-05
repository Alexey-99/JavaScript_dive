/* Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
 */

let number = 21;

while (number < 67) {
  if (number % 2 != 0) {
    console.log(number);
  }
  number++;
}
