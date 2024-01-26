// bai 1 tinh tien taxi

var bill;
var km = 130;
if (km <= 1) {
  bill = km * 15000;
  console.log("tien taxi: " + bill);
} else if (1 < km && km <= 5) {
  bill = km * 13500;
  console.log("tien taxi: " + bill);
} else if (5 < km && km <= 120) {
  bill = km * 11000;
  console.log("tien taxi: " + bill);
} else {
  bill = km * 11000 * 0.9;
  console.log("tien taxi: " + bill);
}
// tinh tien dien theo bac

var kwh = 199;
var hoadon;
var b1 = 1678;
var b2 = 1734;
var b3 = 2014;
var b4 = 2536;
var b5 = 2834;
var b6 = 2927;
if (kwh <= 0) {
  console.log("không thể tạo hóa đơn");
} else if (kwh > 0 && kwh <= 50) {
  hoadon = kwh * b1;
  console.log("tiền điện: " + hoadon);
} else if (kwh >= 51 && kwh <= 100) {
  hoadon = kwh * b2;
  console.log("tiền điện: " + hoadon);
} else if (kwh >= 101 && kwh <= 200) {
  hoadon = kwh * b3;
  console.log("tiền điện: " + hoadon);
} else if (kwh >= 201 && kwh <= 300) {
  hoadon = kwh * b4;
  console.log("tiền điện: " + hoadon);
} else if (kwh >= 301 && kwh <= 400) {
  hoadon = kwh * b5;
  console.log("tiền điện: " + hoadon);
} else {
  hoadon = kwh * b6;
  console.log("tiền điện: " + hoadon);
}

//
