let first = "";
let operator = "";
let second = "";
let addToFirst = true;
let solution = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function integerDivision(a, b) {
  return Math.floor(a / b);
}

function operate(op, f, s) {
  switch (op) {
    case "+":
      return add(f, s);
    case "-":
      return subtract(f, s);
    case "*":
      return multiply(f, s);
    case "/":
      return divide(f, s);
  }
}

const display = document.querySelector(".numberDisplay");
function updateDisplay() {
  if (first) {
    solution = "";
  }
  display.textContent = `${first} ${operator} ${second} ${solution}`;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (addToFirst) {
      first += number.textContent;
      updateDisplay();
    } else {
      second += number.textContent;
      updateDisplay();
    }
  });
});

const operators = document.querySelectorAll(".operator");
function operatorCheck(op) {
  if (op === "x") {
    operator = "*";
  } else {
    operator = op;
  }
}
operators.forEach((o) => {
  o.addEventListener("click", (e) => {
    if (operator === "" && !solution) {
      operatorCheck(o.textContent);
      updateDisplay();

      addToFirst = false;
    } else if (first && second) {
      first = operate(operator, Number(first), Number(second));
      second = "";

      operatorCheck(o.textContent);
      updateDisplay();
    } else if (solution) {
      first = solution;
      solution = "";
      addToFirst = false;
      operatorCheck(o.textContent);
      updateDisplay();
    } else {
      alert(
        "you already have an operator, clear the calculator to select another or fill out the seocnd number",
      );
    }
  });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", (e) => {
  if (first === "" || second === "") {
    alert("Finish your expression");
  } else if (first && second) {
    solution = operate(operator, Number(first), Number(second));
    first = "";
    addToFirst = true;
    second = "";
    operator = "";
    updateDisplay();
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);
function clearDisplay() {
  first = "";
  second = "";
  solution = "";
  operator = "";
  addToFirst = true;
  updateDisplay();
}
