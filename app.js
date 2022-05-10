// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#disp");

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
  if (y == 0) {
    return "ERROR";
  }
  return x / y;
}

//takes operator and 2 numbers, then sends the numbers to the proper function
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
//initializes main variables
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
      display.textContent = displayValue;
    }
    //if there is no existing decimal, add it,
    //if decimal does exist, do nothing and console log error
    else if (button.id == ".") {
      if (displayValue.includes(".")) {
        console.log("ERROR");
      } else {
        displayValue += button.id;
        display.textContent = displayValue;
      }
    } else if (button.id == "equal") {
      console.log(displayValue1);
      console.log(displayValue);
      console.log(operator);
      display.textContent = operate(
        operator,
        parseInt(displayValue1),
        parseInt(displayValue)
      );
    } else if (button.id == "clear") {
      clear();
    } else {
      //the below is an exception for when you click operator
      //a second time for chaining operations.
      if (operator != "") {
        display.textContent = operate(
          operator,
          parseInt(displayValue1),
          parseInt(displayValue)
        );
        operator = button.id;
        displayValue1 = display.textContent;
        displayValue = "";
      }
      //this is for first time operator clicks
      else {
        operator = button.id;
        displayValue1 = displayValue;
        displayValue = "";
      }
    }
  });
});

//clears out every variable and resets it
function clear() {
  displayValue = "";
  displayValue1 = "";
  displayValue2 = "";
  operator = "";
  display.textContent = "";
}
