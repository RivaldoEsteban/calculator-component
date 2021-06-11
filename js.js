const screenContainer = document.getElementById("screen-container");
const screen = document.getElementById("screen");

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  listNumbers.pop();
  screen.textContent = listNumbers;
});

const number0 = document.getElementById("0");
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");

const sum = document.getElementById("sum"); // +
const subtraction = document.getElementById("subtraction"); // -
const multiply = document.getElementById("multiply"); // x
const divide = document.getElementById("divide"); // /
const porcentage = document.getElementById("porcentage"); // %
const resultado = document.getElementById("resultado");
const reset = document.getElementById("reset"); //  restablecer

const listNumbers = [];

function handleScreen(id) {
  listNumbers.push(id);
  screen.textContent = screen.textContent + id;
}

let a;
let b;
let operacion = "";

function limpiar() {
  screen.textContent = "";
}

function resetear() {
  screen.textContent = "";
  a = 0;
  b = 0;
  operacion = "";
}

function resolver() {
  screen.textContent = Number(a + b);
  var res = 0;
  switch (operacion) {
    case "+":
      res = Number(a) + Number(b);
      break;
    case "-":
      res = Number(a) - Number(b);
      break;
    case "/":
      res = Number(a) / Number(b);
      break;
    case "*":
      res = Number(a) * Number(b);
      break;
    case "%":
      res = Number(a) % Number(b);
      break;
  }
  resetear();
  screen.textContent = res;
}

sum.addEventListener("click", () => {
  a = screen.textContent;
  console.log(screen.textContent);
  operacion = "+";
  limpiar();
});

porcentage.addEventListener("click", () => {
  // handleScreen("%");
  a = screen.textContent;
  operacion = "%";
  limpiar();
});
subtraction.addEventListener("click", () => {
  // handleScreen("-");
  a = screen.textContent;
  operacion = "-";
  limpiar();
});
divide.addEventListener("click", () => {
  // handleScreen("/");
  a = screen.textContent;
  operacion = "/";
  limpiar();
});
multiply.addEventListener("click", () => {
  // handleScreen("*");
  a = screen.textContent;
  operacion = "*";
  limpiar();
});

resultado.addEventListener("click", () => {
  b = screen.textContent;
  console.log(b);
  resolver();
});

number0.addEventListener("click", () => {
  handleScreen(0);
});
number1.addEventListener("click", () => {
  handleScreen(1);
});
number2.addEventListener("click", () => {
  handleScreen(2);
});
number3.addEventListener("click", () => {
  handleScreen(3);
});
number4.addEventListener("click", () => {
  handleScreen(4);
});
number5.addEventListener("click", () => {
  handleScreen(5);
});
number6.addEventListener("click", () => {
  handleScreen(6);
});
number7.addEventListener("click", () => {
  handleScreen(7);
});
number8.addEventListener("click", () => {
  handleScreen(8);
});
number9.addEventListener("click", () => {
  handleScreen(9);
});
