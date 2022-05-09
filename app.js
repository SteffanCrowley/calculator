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
