var saveBtn = document.querySelector(".save-btn");
var defaultFileName = document.querySelector(".file-name");
var b = document.querySelector(".b");
var u = document.querySelector(".u");
var i = document.querySelector(".i");
var color = document.querySelector(".color");
var contentDocs = document.querySelector(".input-docs");
var dataDocs = document.querySelector(".data-docs");
var saveOption = document.querySelector(".save-option");
var fileName = defaultFileName.innerText;
// lay noi dung

window.addEventListener("DOMContentLoaded", function () {
  contentDocs.focus();
  //
  //
  var hi = function () {
    var selection;

    if (window.getSelection) {
      selection = window.getSelection().toString();
    } else if (document.selection) {
      selection = document.selection.createRange();
    }
    b.addEventListener("click", function () {
      document.execCommand("bold", false, selection);
    });
  };

  contentDocs.addEventListener("input", function () {
    var content = this.innerText;
  });

  saveBtn.addEventListener("click", function () {
    saveOption.classList.toggle("none");
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
});
