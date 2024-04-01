let download = document.querySelector(".download");
let countdown = download.querySelector(".countdown");
let getLinkBtn = download.querySelector(".get-link");
//

let pastSecond = null;
function countDown() {
  let seconds = new Date().getSeconds();

  if (seconds !== pastSecond) {
    pastSecond = seconds;
    countdown.innerText = countdown.innerText - 1;
    if (countdown.innerText <= 0) {
      getLinkBtn.classList.remove("block");
      getLinkBtn.disabled = false;
      return;
    }
  }

  requestAnimationFrame(countDown);
}
countDown();
getLinkBtn.addEventListener("click", () => {
  window.location.href = "https://fullstack.edu.vn/";
});
