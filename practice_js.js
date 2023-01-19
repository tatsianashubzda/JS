// 1. Найдите произведение нечетных элементов массива

let arr = [30, 7, 19, 20];
let productOdd = 1;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    productOdd *= arr[i]
  }
}



//2. Найдите сумму четных элементов массива

let arr = [30, 7, 19, 20];
let sumEven = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sumEven += arr[i]
  }
}


//3. Найдите количество элементов массива, у которых последняя цифра - 0

let arr = [30, 7, 19, 20];
let countMultOf10 = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 10 === 0) {
    countMultOf10 ++;
  }
}


//4. Найдите количество четных положительных элементов массива.

let arr = [30, 7, -2, 19, -5, 20];
let countPositiveEven = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] > 0) {
    countPositiveEven ++;
  }
}



//5. Напишите программу, которая возвращает время после полуночи в миллисекундах, при условии чтона часах время показано в виде h hours, m minutes and s seconds после полуночи.
let t = function (h, m, s) {
	if ((0 <= h && h <= 23) && (0 <= m && m <= 59) && (0 <= m && m <= 59)) {
       	 	console.log((h * 3600 + m * 60 + s) * 1000)
    		}
    	else console.log('Введите валидные данные')
	}


//6.Найдите количество четных элементов массива

let arr = [30, 7, -2, 19, -5, 20];
let countEven = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 ) {
    countEven ++;
  }
}


//7. Найдите количество нечетных элементов массива

let arr = [30, 7, -2, 19, -5, 20];
let countOdd = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0 ) {
    countOdd ++;
  }
}


//8. Найдите количество элементов массива, значение которых меньше 10

let arr = [30, 7, -2, 19, -5, 20];
let countElementsLessThan10 = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]< 10 ) {
    countElementsLessThan10 ++;
  }
}


//9. Найдите сумму четных чисел и произведение нечетных чисел от 1 до 20.

let sumOfEven = 0;
let productOfOdd = 1;
for (i = 1; i <=20; i++) {
  if (i % 2 === 0) {
  sumOfEven += i;
  } else {
  productOfOdd *= i}
}


//10. 