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
contentDocs.addEventListener("input", function () {
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
// dropdown saveoption
saveBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  saveOption.classList.toggle("none");
});
document.addEventListener("click", function () {
  saveOption.classList.add("none");
});
// new file
var newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click", function () {
  contentDocs.innerText = "";
  fileName = defaultFileName.innerText;
  contentDocs.focus();
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
