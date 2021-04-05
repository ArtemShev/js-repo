"use strict"
// Задание 1


//пример 1
let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // ответ: 2

// Сначала а увеличилось на один, а потом было присвоено это значение переменной  с. а = 2


//пример 2
d = b++;
alert(d); //ответ: 1

// Сначала присваивается значение b в переменную d, а после b увеличивается на один. b = 2


//пример 3
c = 2 + ++a;
alert(c); //ответ: 5

//сначала а увеличивается на один и становится равное трем, потом прибавляется 2 и это присвается переменной с. a = 3


//пример 4
d = 2 + b++;
alert(d); //ответ: 4

// b складывается с 2 и присвается переменной d, после чего b увеличивается на один. b = 3
alert(a); //3
alert(b); //3


// Задание 2

a = 2;
let x = 1 + (a *= 2);

// a = 4 так как мы умножаем переменную на два и присваиваем ее заново. х равен 5, тк 4 + 1

//Задание 3

a = +prompt("Введите число а");
b = +prompt("Введите число b");
let result;

if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    result = a + b;
}

alert(`Ваш результат ${result}`)

// Задание 4

const plusF = (num1, num2) => {
    return num1 + num2;
};
const minusF = (num1, num2) => {
    return num1 - num2;
};
const increaseF = (num1, num2) => {
    return num1 * num2;
};
const divisionF = (num1, num2) => {
    return num1 / num2;
};

console.log(`сложение ${plusF(a, b)}`);
console.log(`вычитание ${minusF(a, b)}`);
console.log(`умножение ${increaseF(a, b)}`);
console.log(`деление ${divisionF(a, b)}`);

// Задание 5

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            alert(`сложение ${plusF(arg1, arg2)}`);
            break;
        case 'вычитание':
            alert(`вычитание ${minusF(arg1, arg2)}`);
            break;
        case 'умножение':
            alert(`умножение ${increaseF(arg1, arg2)}`);
            break;
        case 'деление':
            alert(`деление ${divisionF(arg1, arg2)}`);
            break;
        default:
            alert('Не знаю такой операции')
    }
}

let a1 = +prompt('Введите первый аргумент'),
    a2 = +prompt('Введите второй аргумент'),
    operation = prompt('Введите одну из этих операций: сложение, деление, умножение, вычитание');

mathOperation(a1, a2, operation);