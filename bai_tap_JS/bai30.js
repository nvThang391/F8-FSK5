// ham tao nhanh cac El
var createEl = {
  createElement: function (tag, attributes = {}, ...children) {
    var element = document.createElement(tag);
    if (children.length) {
      children.forEach(function (item) {
        element.append(item);
      });
    }
    if (Object.keys(attributes).length) {
      Object.keys(attributes).forEach(function (attribute) {
        var value = attributes[attribute];
        if (attribute.startsWith("on")) {
          var eventName = attribute.replace("on", "").toLowerCase();
          element.addEventListener(eventName, value);
        } else {
          element[attribute] = value;
        }
      });
    }
    return element;
  },
};
// Xay dung bang
var products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Product 3",
    price: 7000,
  },
  {
    id: 4,
    name: "Product 4",
    price: 10000,
  },
];
//
var tableProduct = document.querySelector("#product_table");
var cart = document.querySelector("#cart_data");
//
var productEl = products.map(function (pro) {
  return createEl.createElement(
    "tr",
    {},
    createEl.createElement("td", {}, `${pro.id}`),
    createEl.createElement("td", {}, `${pro.name}`),
    createEl.createElement("td", {}, `${pro.price}`),
    createEl.createElement(
      "td",
      {},
      createEl.createElement("input", { value: "1", type: "number" }, ""),
      createEl.createElement(
        "button",
        {
          type: "button",
          className: "btn-add",
        },
        "add to cart"
      )
    )
  );
});
var tbodyPro = createEl.createElement("tbody", {}, ...productEl);
tableProduct.append(tbodyPro);
var btnadd = document.querySelectorAll(".btn-add");
//
var tableCart = createEl.createElement(
  "table",
  {
    cellpadding: "0",
    cellspacing: "0",
    width: "100%",
    border: "1",
    // style: "display: none",
  },
  ""
);
cart.append(tableCart);
var thead_Cart = createEl.createElement(
  "tr",
  {},
  createEl.createElement("td", {}, "STT"),
  createEl.createElement("td", {}, "Ten San Pham"),
  createEl.createElement("td", {}, "Gia"),
  createEl.createElement("td", {}, "So luong"),
  createEl.createElement("td", {}, "Thanh Tien"),
  createEl.createElement("td", {}, "Xoa")
);
tableCart.append(thead_Cart);
//
var number = 0;
// var quantity = 0;
// var totalprice = 0;
//
var billEl = products.map(function (bill) {
  return createEl.createElement(
    "tr",
    { style: "display: none" },
    createEl.createElement("td", {}, `${number}`),
    createEl.createElement("td", {}, `${bill.name}`),
    createEl.createElement("td", {}, `${bill.price}`),
    createEl.createElement("td", {}, ""),
    createEl.createElement("td", {}, ""),
    createEl.createElement(
      "td",
      {},
      createEl.createElement(
        "button",
        {
          type: "button",
          className: "btn-delete",
        },
        "remove"
      )
    )
  );
});
//
var totalbill = createEl.createElement(
  "tr",
  {},
  createEl.createElement("td", { className: "col-3" }, "tong"),
  createEl.createElement("td", {}, ""),
  createEl.createElement("td", { className: "col-2" }, "")
);

var tbodyCart = createEl.createElement("tbody", {}, ...billEl);
var footerCart = createEl.createElement("tbody", {}, totalbill);
tableCart.append(tbodyCart);
tableCart.append(footerCart);
var col3 = document.querySelector(".col-3").setAttribute("colspan", "3");

//
for (let i = 0; i < btnadd.length; i++) {
  if (i === 0) {
    var quantity0 = 0;
    btnadd[i].addEventListener("click", function (e) {
      billEl[i].style = "initial";
      quantity0 += Number(e.target.previousElementSibling.value);
      billEl[i].children[3].innerText = quantity0;
      billEl[i].children[4].innerText =
        quantity0 * billEl[i].children[2].innerText;
    });
  } else if (i === 1) {
    var quantity1 = 0;
    btnadd[i].addEventListener("click", function (e) {
      billEl[i].style = "initial";
      quantity1 += Number(e.target.previousElementSibling.value);
      billEl[i].children[3].innerText = quantity1;
      billEl[i].children[4].innerText =
        quantity1 * billEl[i].children[2].innerText;
    });
  } else if (i === 2) {
    var quantity2 = 0;
    btnadd[i].addEventListener("click", function (e) {
      billEl[i].style = "initial";
      quantity2 += Number(e.target.previousElementSibling.value);
      billEl[i].children[3].innerText = quantity2;
      billEl[i].children[4].innerText =
        quantity2 * billEl[i].children[2].innerText;
    });
  } else if (i === 3) {
    var quantity3 = 0;
    btnadd[i].addEventListener("click", function (e) {
      billEl[i].style = "initial";
      quantity3 += Number(e.target.previousElementSibling.value);
      billEl[i].children[3].innerText = quantity3;
      billEl[i].children[4].innerText =
        quantity3 * billEl[i].children[2].innerText;
    });
  }
}
