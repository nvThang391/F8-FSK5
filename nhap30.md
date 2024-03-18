// var product01 = createEl.createElement(
// "tr",
// {},
// createEl.createElement("td", {}, "1"),
// createEl.createElement("td", {}, "product 1"),
// createEl.createElement("td", {}, "1000"),
// createEl.createElement(
// "td",
// {},
// createEl.createElement("input", { value: "1", type: "number" }, ""),
// createEl.createElement(
// "button",
// {
// type: "button",
// className: "btn",
// onClick: function (e) {},
// },
// "add to cart"
// )
// )
// );
// var product02 = createEl.createElement(
// "tr",
// {},
// createEl.createElement("td", {}, "2"),
// createEl.createElement("td", {}, "product 2"),
// createEl.createElement("td", {}, "2000"),
// createEl.createElement(
// "td",
// {},
// createEl.createElement("input", { value: "1", type: "number" }, ""),
// createEl.createElement(
// "button",
// {
// type: "button",
// className: "btn",
// onClick: function (e) {},
// },
// "add to cart"
// )
// )
// );
// var product03 = createEl.createElement(
// "tr",
// {},
// createEl.createElement("td", {}, "3"),
// createEl.createElement("td", {}, "product 3"),
// createEl.createElement("td", {}, "7000"),
// createEl.createElement(
// "td",
// {},
// createEl.createElement("input", { value: "1", type: "number" }, ""),
// createEl.createElement(
// "button",
// {
// type: "button",
// className: "btn",
// onClick: function (e) {},
// },
// "add to cart"
// )
// )
// );
// var product04 = createEl.createElement(
// "tr",
// {},
// createEl.createElement("td", {}, "4"),
// createEl.createElement("td", {}, "product 4"),
// createEl.createElement("td", {}, "10000"),
// createEl.createElement(
// "td",
// {},
// createEl.createElement("input", { value: "1", type: "number" }, ""),
// createEl.createElement(
// "button",
// {
// type: "button",
// className: "btn",
// onClick: function (e) {},
// },
// "add to cart"
// )
// )
// );
// tbody.append(productEl);

btn.forEach((i) => {
i.addEventListener("click", function () {
x = Number(this.previousElementSibling.value);
quantityTotal += x;
// hien table order
if (quantityTotal) {
// tieu de bang
var theadOrder = createEl.createElement(
"thead",
{},
createEl.createElement(
"tr",
{},
createEl.createElement("td", {}, "STT"),
createEl.createElement("td", {}, "Ten San Pham"),
createEl.createElement("td", {}, "Gia"),
createEl.createElement("td", {}, "So luong"),
createEl.createElement("td", {}, "Thanh Tien"),
createEl.createElement("td", {}, "Xoa")
)
);
// noi dung bang
var OrderEl = products.map(function (order) {
return createEl.createElement(
"tr",
{},
createEl.createElement("td", {}, `${order.name}`),
createEl.createElement("td", {}, `${order.price}`)
);
});
// tao bang
var tableOrder = createEl.createElement(
"table",
{ cellpadding: "0", cellspacing: "0", width: "100%", border: "1" },
""
);
var tbodyOrder = createEl.createElement("tbody", {}, ...OrderEl);
tableOrder.append(theadOrder);
tableOrder.append(tbodyOrder);
cart.append(tableOrder);
} else {
}
});
});
