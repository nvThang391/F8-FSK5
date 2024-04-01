var saveBtn = document.querySelector(".save-btn");
var defaultFileName = document.querySelector(".file-name");
var b = document.querySelector(".b");
var u = document.querySelector(".u");
var i = document.querySelector(".i");
var color = document.querySelector(".color");
var contentDocs = document.querySelector(".input-docs");
var dataDocs = document.querySelector(".data-docs");
var saveOption = document.querySelector(".save-option");
var char = dataDocs.querySelector(".characters");
var words = dataDocs.querySelector(".words");
//
var fileName = defaultFileName.innerText;
contentDocs.focus();
//
contentDocs.addEventListener("input", function (e) {
  e.stopPropagation();
  var content = this.innerText;
  // dem ky tu
  var charCount = content.trim().length;
  char.children[0].innerText = charCount;
  // dem tu
  var word = content.trim().replace(/\s+/g, " ");
  var wordCount = word.split(" ").length;
  if (content) {
    words.children[0].innerText = wordCount;
  } else {
    words.children[0].innerText = "0";
  }
});
// dropdown save_option
saveBtn.addEventListener("click", function (e) {
  saveOption.classList.toggle("none");
});
document.addEventListener("click", function () {
  saveOption.classList.add("none");
});
// new file
var newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click", function () {
  contentDocs.innerText = "";
  defaultFileName.innerText = "unknow";
  fileName = defaultFileName.innerText;
  contentDocs.focus();
  char.children[0].innerText = "0";
  words.children[0].innerText = "0";
});
// save file Txt
var txtBtn = document.querySelector(".txt");
txtBtn.addEventListener("click", function () {
  var content = contentDocs.innerHTML;
  fileName = defaultFileName.innerText;
  var txt = new Blob([content]);
  var linktxt = URL.createObjectURL(txt);
  var a = document.createElement("a");
  a.href = linktxt;
  a.download = `${fileName}.txt`;
  a.click();
});
//save file Pdf
var pdfBtn = document.querySelector(".pdf");
pdfBtn.addEventListener("click", function () {
  fileName = defaultFileName.innerText;
  html2pdf().from(contentDocs.innerText).save(`${fileName}.pdf`);
});
// document.execCommand("styleWithCSS", false, true);
// bold text

b.addEventListener("click", function (e) {
  b.classList.toggle("active");
  document.execCommand("bold");
});

// italic Text
i.addEventListener("click", function (e) {
  i.classList.toggle("active");
  document.execCommand("italic");
});
// underline Text
u.addEventListener("click", function (e) {
  u.classList.toggle("active");
  document.execCommand("underline");
});
// change color Text
color.addEventListener("input", function (e) {
  document.execCommand("foreColor", false, this.value);
});
