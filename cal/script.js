let inputString = '';
let result = 0;

function input(val) {
  inputString += val;
  document.getElementById('result').innerHTML = inputString;
}

function clearInput() {
  inputString = '';
  result = 0;
  document.getElementById('result').innerHTML = result;
}

function calculate() {
  result = eval(inputString);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}
