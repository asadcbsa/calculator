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

function sin() {
  const angle = eval(inputString);
  const radians = angle * (Math.PI / 180);
  result = Math.sin(radians);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}

function cos() {
  const angle = eval(inputString);
  const radians = angle * (Math.PI / 180);
  result = Math.cos(radians);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}

function tan() {
  const angle = eval(inputString);
  const radians = angle * (Math.PI / 180);
  result = Math.tan(radians);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}

function power() {
  const [x, y] = inputString.split('^').map(Number);
  result = Math.pow(x, y);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}

function sqrt() {
  const num = eval(inputString);
  result = Math.sqrt(num);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}

function log() {
  const num = eval(inputString);
  result = Math.log10(num);
  document.getElementById('result').innerHTML = result;
  inputString = '';
}
