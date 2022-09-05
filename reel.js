const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (display.innerText == "0") {
      display.innerText = "";
    }

    if (item.id == "clear-btn") {
      display.innerText = "";

    } else if (item.id == "backspace-btn") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);

    } else if (display.innerText != "" && item.id == "equal-btn") {
      display.innerText = eval(display.innerText);

    } else if (display.innerText == "" && item.id == "equal-btn") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);

    } else if (item.class == "btn-circle-operator" && display.innerText == "0") {
      display.innerText = "Empty!";
    } 
    
    else {
      display.innerText += item.innerHTML;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};