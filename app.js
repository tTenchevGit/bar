

let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let progressBar = document.querySelector(".progress-bar");
let valueSpan = document.querySelector("span");

let value = 0;

btn.onclick = function () {
  if (input.value != "" && parseInt(input.value) <= input.max) {
    let progress = setInterval(() => {
      if (value < input.value) {
        value++;
      } else {
        value--;
      }

      valueSpan.textContent = `${value}%`;
      progressBar.style.background = `conic-gradient(#4070f4 ${
        value * 3.6
      }deg, #ededed 0deg)`;
      // 360 / 100 = 3.6
      if (value == input.value) {
        clearInterval(progress);
        input.value = "";
        input.focus();
      }
    }, 50);
  }
};