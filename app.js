// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "add":
      return add(x, y);
    case "multiply":
      return multiply(x, y);
    case "subtract":
      return subtract(x, y);
    case "divide":
      return divide(x, y);
  }
}
let displayValue = "";
let displayValue1 = "";
let displayValue2 = "";
let operator = "";

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (Number.isInteger(parseInt(button.id))) {
      displayValue += button.id;
    } else if (button.id == "equal") {
      console.log(displayValue1);
      console.log(displayValue);
      console.log(operator);
      console.log(
        operate(operator, parseInt(displayValue1), parseInt(displayValue))
      );
    } else {
      operator = button.id;
      displayValue1 = displayValue;
      displayValue = "";
    }
  });
});
