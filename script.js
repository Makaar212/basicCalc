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

const numbers = document.querySelectorAll(".number");
console.log(numbers);
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (addToFirst) {
      first += number.textContent;
      console.log(first);
    } else {
      second += number.textContent;
      console.log(second);
    }
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((o) => {
  o.addEventListener("click", (e) => {
    if (operator === "") {
      operator = o.textContent;
      addToFirst = false;
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
  }
});
