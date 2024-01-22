/** @format */

var a = 10;
var b = 5;
var c = -3;
// Bài 1: Hoán vị 2 số
console.log("a = " + a);
console.log("b = " + b);
console.log("hoan vi: ");
a = a + b;
b = a - b;
a = a - b;
console.log("a = " + a);
console.log("b = " + b);

// Bài 2: Thực hiện phép toán

var result = 10 + 20 + 5 ** 10 / 2;
console.log("10 + 20 + 5 ** 10 / 2 = " + result);

// Bài 3: Tìm số lớn nhất

var maxNumber = a;
if (maxNumber < b) {
  maxNumber = b;
}

if (maxNumber < c) {
  maxNumber = c;
}

console.log(`Số lớn nhất là ${maxNumber}`);

// Bài 4: Kiểm tra số cùng dấu

var S;
if (a * c > 0) {
  S = "Hai số cùng dấu";
}
if (a * c < 0) {
  S = "Hai số trái dấu";
}
console.log(S);

// Bài 5: Sắp xếp 3 số

var temporary;

if (a > b) {
  temporary = a;
  a = b;
  b = temporary;
}
if (a > c) {
  temporary = a;
  a = c;
  c = temporary;
}

if (b > c) {
  temp = b;
  b = c;
  c = temp;
}
console.log("ket qua sau khi sap xep:");
console.log(a, b, c);
