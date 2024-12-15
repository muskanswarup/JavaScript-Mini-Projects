// const input = document.getElementById("input-hex-code");
// const button = document.getElementById("button");
// const body = document.body;
// const alertText = document.getElementById("alert-text");

// function isValidHex(hex) {
//   const updatedHex = hex.charAt(0) === "#" ? hex.substring(1) : hex;
//   return /^([0-9A-F]{3}){1,2}$/i.test(updatedHex);
// }


// input.addEventListener('input' , () => {
//   if(isValidHex(input.value.trim())){
//     button.disabled = false;
//     button.style.backgroundColor = 'seagreen';
//     alertText.textContent = '';
//   }else{
//     button.disabled = true;
//     button.style.backgroundColor = 'gray';
//   }
// })


// function printInput() {
//   console.log("Button was clicked");

//   let inputValue = input.value.trim();
//   console.log(inputValue);

//   isValidHex(inputValue);

//   if (!isValidHex(inputValue)) {
//     console.log("Bro what's wrong with you?");
//     alertText.textContent = "Enter a valid hexcode!";
//     return;
//   }

//   alertText.textContent = "";

//   if (inputValue.charAt(0) !== "#") {
//     inputValue = "#" + inputValue;
//   }
//   document.body.style.backgroundColor = inputValue;
// }

const input = document.getElementById("input-hex-code");
const button = document.getElementById("button");
const body = document.body;
const alertText = document.getElementById("alert-text");

function isValidHex(hex) {
  const updatedHex = hex.charAt(0) === "#" ? hex.substring(1) : hex;
  return /^([0-9A-F]{3}){1,2}$/i.test(updatedHex);
}

// Update button styles based on input validity
input.addEventListener("input", () => {
  if (isValidHex(input.value.trim())) {
    button.disabled = false;
    button.style.backgroundColor = "seagreen"; // Fix the typo
    alertText.textContent = ""; // Clear the alert when valid input is entered
  } else {
    button.disabled = false; // Keep the button active
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

    alertText.textContent = ""; // Clear error message

    if (inputValue.charAt(0) !== '#') {
        inputValue = '#' + inputValue;
    }

    document.body.style.backgroundColor = inputValue;
    currentColorText.textContent = `Background color: ${inputValue}`;
}
