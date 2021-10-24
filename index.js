const display = document.querySelector('.display');
console.log(display.innerText);

function saludar() {
  console.log('hola');
}

function clickButton() {
  const number = window.event.target.innerText;
  display.innerText = display.innerText + number;
}
function clickOperation() {
  const operation = window.event.target.innerText;
  const displayLength = display.innerText.length;
  const lastCharacter = display.innerText[displayLength - 1];

  if (Number(lastCharacter)) {
    display.innerText = display.innerText + operation;
  } else {
    // remplace el ultimo caracter de display
    console.log('no es number');
    display.innerText = display.innerText.slice(0, -1) + operation;
  }
}
function clickResult() {
  const result = eval(display.innerText);
  display.innerText = result;
}
saludar();
