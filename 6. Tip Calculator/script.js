const bill = document.getElementById("bill");
const people = document.getElementById("people");
const button = document.getElementById("button");
const dropdownId = document.getElementById("service");
const result = document.getElementById("result");
const billAlert = document.getElementById("bill-alert");
const dropdownAlert = document.getElementById("dropdown-alert");
const peopleAlert = document.getElementById("people-alert");

button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission (if inside a form)
  
  console.log("Button is clicked");

  console.log("Amount : ", bill.value);
  console.log("Number of people : ", people.value);
  console.log("Selected dropdown : ", dropdownId.value);

  let billAmount = parseFloat(bill.value);
  let numberOfPeople = parseInt(people.value);
  let selectedDropdown = dropdownId.value;

  // Clear previous alerts
  billAlert.innerHTML = "";
  dropdownAlert.innerHTML = "";
  peopleAlert.innerHTML = "";
  result.innerHTML = "";

  let hasError = false;

  // Bill validation
  if (isNaN(billAmount) || billAmount <= 0) {
    billAlert.innerHTML = "Please enter a valid bill amount greater than 0.";
    hasError = true;
  }

  // Dropdown validation
  if (selectedDropdown === "") {
    dropdownAlert.innerHTML = "Please select a service rating.";
    hasError = true;
  }

  // People validation
  if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
    peopleAlert.innerHTML = "Please enter a valid number of people (greater than 0).";
    hasError = true;
  }

  if (hasError === true) return;

  let tip = billAmount * parseFloat(selectedDropdown);
  console.log("Total tip: ", tip);

  let tipForEachPerson = tip / numberOfPeople;
  console.log("Tip for each: ", tipForEachPerson);

  result.innerHTML = `
    <p>Total tip: $${tip.toFixed(2)}</p>
    <p>Tip per person: $${tipForEachPerson.toFixed(2)}</p>`;
  
});
