// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(newArray) {
  let z = 1;

  for (let i = 0; i < newArray.length; i++) {
    z = z * newArray[i];
  }
  return z;
}

function divide(newArray) {
  return newArray[0] / newArray[1];
}

function operate(operator, x, y) {
  switch (operator) {
    case add:
      return add(x, y);
    case multiply:
      return multiply(x, y);
    case subtract:
      return subtract(x, y);
    case divide:
      return divide(x, y);
  }
}

let displayValue1 = "";
let operator = "";

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (Number.isInteger(parseInt(button.id))) {
      displayValue1 += button.id;
    } else {
      operator = button.id;
      console.log(displayValue1);
      console.log(operator);
    }
  });
});
