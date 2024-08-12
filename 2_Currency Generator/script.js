const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const msgContainer = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  // Update the flag image based on the selected currency
  updateFlag(select);
}

dropdowns.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
    updateExchangeRate();
  });
});

// Function to update the flag image based on the selected currency
function updateFlag(select) {
  const flagImage = select.parentElement.querySelector("img");
  const selectedCurrency = select.value;
  const countryCode = countryList[selectedCurrency];
  flagImage.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Function to update the exchange rate
async function updateExchangeRate() {
  const fromCurrency = document.querySelector("select[name='from']").value;
  const toCurrency = document.querySelector("select[name='to']").value;

  const url = `${BASE_URL}/${fromCurrency}/${toCurrency}.json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data[toCurrency];
    msgContainer.innerText = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    msgContainer.innerText = "Error fetching exchange rate";
  }
}

// Initial update of the exchange rate
updateExchangeRate();
