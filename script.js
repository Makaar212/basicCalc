let first;
let operator;
let second;

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
