const input = document.getElementById("input-hex-code");
const button = document.getElementById("button");
const body = document.body;
const alertText = document.getElementById("alert-text");

function isValidHex(hex) {
  const updatedHex = hex.charAt(0) === "#" ? hex.substring(1) : hex;
  return /^([0-9A-F]{3}){1,2}$/i.test(updatedHex);
}

input.addEventListener("input", () => {
  if (isValidHex(input.value.trim())) {
    button.disabled = false;
    button.style.backgroundColor = "seagreen"; 
    alertText.textContent = ""; 
  } else {
    button.disabled = false; 
    button.style.backgroundColor = "gray";
  }
});
const currentColorText = document.getElementById('current-color');

function printInput() {
    let inputValue = input.value.trim();

    if (!isValidHex(inputValue)) {
        alertText.textContent = "Enter a valid hex code!";
        return;
    }

    alertText.textContent = ""; 

    if (inputValue.charAt(0) !== '#') {
        inputValue = '#' + inputValue;
    }

    document.body.style.backgroundColor = inputValue;
    currentColorText.textContent = `Background color: ${inputValue}`;
}
