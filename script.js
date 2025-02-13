const buttons = document.querySelectorAll(".button");
let displayValue = document.querySelector("input");
const delBtn = document.querySelector(".del");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);
    let value = button.innerText;
    displayValue.value += value;
  });
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  displayValue.value = "";
});

let result = document.querySelector("#equal");
result.addEventListener("click", () => {
  // let output = eval(displayValue.value);
  // console.log(output);
  try {
    let output = eval(displayValue.value);
    displayValue.value = output;
  } catch (error) {
    displayValue.value = "Error";
  }
  // displayValue.value = output;
});

delBtn.addEventListener("click", () => {
  displayValue.value = displayValue.value.toString().slice(0, -1);
  // console.log(typeof displayValue.value);
});
