// 1. Найдите произведение нечетных элементов массива

let arr = [30, 7, 19, 20];
let productOdd = 1;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    productOdd *= arr[i]
  }
}



//2. 