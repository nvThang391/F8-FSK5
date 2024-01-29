// Hiển thị N số Fibonaci đầu tiên

var n = 12;
function fibonacci(n, f1, f2) {
  if (n > 0 && n % 1 === 0) {
    console.log(get(n, 0, 1, 0));
  } else if (n === 2) {
    console.log(f1);
    console.log(f2);
  } else if (n === 1) {
    console.log(f1);
  } else if (count <= 0) {
    console.log("moi nhap lai: ");
  }
}
function get(n, f1, f2, fn) {
  if (n > 0 && n % 1 === 0) {
    console.log(fn);
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
    get(n - 1, f1, f2, fn);
  }
}

console.log(fibonacci(n, 0, 1));
//bai 2

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("35790"));

// bai 3

function convertNumber(number) {
  if (number < 0 || number > 9999) {
    return "so nam trong khoang 0 - 9999";
  }
}
