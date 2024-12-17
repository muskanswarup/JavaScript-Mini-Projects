// Tab change logic
document.addEventListener("DOMContentLoaded", () => {
    const usUnitsBtn = document.getElementById("US_units_btn");
    const metricUnitsBtn = document.getElementById("metric_units_btn");
    const usUnitsContent = document.getElementById("US_units");
    const metricUnitsContent = document.getElementById("Metric_units");

    const showUsUnits = () => {
        usUnitsContent.style.display = "block";
        metricUnitsContent.style.display = "none";
        usUnitsBtn.classList.add("active-tab");
        metricUnitsBtn.classList.remove("active-tab");
    };

    const showMetricUnits = () => {
        usUnitsContent.style.display = "none";
        metricUnitsContent.style.display = "block";
        usUnitsBtn.classList.remove("active-tab");
        metricUnitsBtn.classList.add("active-tab");
    };

    usUnitsBtn.addEventListener("click", showUsUnits);
    metricUnitsBtn.addEventListener("click", showMetricUnits);

    showUsUnits();
});

// Alerts
const ageAlert = document.querySelector('.age-alert');
const genderAlert = document.querySelector('.gender-alert');
const heightAlert = document.querySelector('.height-alert');
const weightAlert = document.querySelector('.weight-alert');

const ageAlertMetric = document.querySelector('.age-alert-metric');
const genderAlertMetric = document.querySelector('.gender-alert-metric');
const heightAlertMetric = document.querySelector('.height-alert-metric');
const weightAlertMetric = document.querySelector('.weight-alert-metric');

// Buttons
const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('reset');

// Input fields (US units)
const ageInputUS = document.querySelector('#ageUS');
const weightInputUS = document.querySelector('#weightUS');
const heightInputFeet = document.querySelector('#heightUSFeet');
const heightInputInches = document.querySelector('#heightUSInches');

// Input fields (Metric units)
const ageInputMetric = document.querySelector('#ageMetric');
const weightInputMetric = document.querySelector('#weightMetric');
const heightMetric = document.querySelector('#heightMetric');

// Get the result div
const resultDiv = document.createElement('div');
resultDiv.id = 'result';
document.getElementById('container').appendChild(resultDiv);

// Calculate BMI
function calculateBMI() {
    let hasError1 = false;
    let hasError2 = false;

    // Clear previous alerts
    ageAlert.innerHTML = "";
    genderAlert.innerHTML = "";
    heightAlert.innerHTML = "";
    weightAlert.innerHTML = "";

    ageAlertMetric.innerHTML = "";
    genderAlertMetric.innerHTML = "";
    heightAlertMetric.innerHTML = "";
    weightAlertMetric.innerHTML = "";

    // **Age Validation (US Units)**
    if (!ageInputUS.value || isNaN(ageInputUS.value) || ageInputUS.value < 2 || ageInputUS.value > 120) {
        ageAlert.innerHTML = "Please enter a valid age between 2 to 120.";
        hasError1 = true;
    }

    // **Gender Validation (US Units)**
    const genderUS = document.querySelector('input[name="gender"]:checked');
    if (!genderUS) {
        genderAlert.innerHTML = "Please select a gender before proceeding.";
        hasError1 = true;
    }

    // **Height Validation (US Units)**
    if (!heightInputFeet.value || !heightInputInches.value || isNaN(heightInputFeet.value) || isNaN(heightInputInches.value) || heightInputFeet.value < 0 || heightInputInches.value < 0) {
        heightAlert.innerHTML = "Please enter appropriate values for height.";
        hasError1 = true;
    }

    // **Weight Validation (US Units)**
    if (!weightInputUS.value || isNaN(weightInputUS.value) || weightInputUS.value <= 0) {
        weightAlert.innerHTML = "Please enter a valid number for weight.";
        hasError1 = true;
    }

    // **Age Validation (Metric Units)**
    if (!ageInputMetric.value || isNaN(ageInputMetric.value) || ageInputMetric.value < 2 || ageInputMetric.value > 120) {
        ageAlertMetric.innerHTML = "Please enter a valid age between 2 to 120.";
        hasError2 = true;
    }

    // **Gender Validation (Metric Units)**
    const genderMetric = document.querySelector('input[name="gender-metric"]:checked');
    if (!genderMetric) {
        genderAlertMetric.innerHTML = "Please select a gender before proceeding.";
        hasError2 = true;
    }

    // **Height Validation (Metric Units)**
    if (!heightMetric.value || isNaN(heightMetric.value) || heightMetric.value <= 0) {
        heightAlertMetric.innerHTML = "Please enter a valid height value.";
        hasError2 = true;
    }

    // **Weight Validation (Metric Units)**
    if (!weightInputMetric.value || isNaN(weightInputMetric.value) || weightInputMetric.value <= 0) {
        weightAlertMetric.innerHTML = "Please enter a valid number for weight.";
        hasError2 = true;
    }

    if (hasError1 && hasError2) return;

    let bmi = 0;

    // US Units Calculation
    if (!hasError1) {
        const weight = parseFloat(weightInputUS.value);
        const feet = parseFloat(heightInputFeet.value);
        const inches = parseFloat(heightInputInches.value);
        const totalInches = (feet * 12) + inches;
        bmi = (weight / (totalInches * totalInches)) * 703;
    }

    // Metric Units Calculation
    if (!hasError2) {
        const weight = parseFloat(weightInputMetric.value);
        const height = parseFloat(heightMetric.value) / 100; // convert cm to meters
        bmi = weight / (height * height);
    }

    if (!hasError1 || !hasError2) {

        if(bmi >= 18.5 && bmi <= 24.9){
            resultDiv.innerHTML = `<h3>Your BMI is: ${bmi.toFixed(2)}</h3> 
            <h4>Your BMI lies in the healthy range</h4>`;
        }else if(bmi >= 25 && bmi <= 29.9){
            resultDiv.innerHTML =  `<h3>Your BMI is: ${bmi.toFixed(2)}</h3> 
            <h4>Your BMI lies in the overweight range</h4>`;
        }else if(bmi >= 30 && bmi <= 39.9){
            resultDiv.innerHTML =  `<h3>Your BMI is: ${bmi.toFixed(2)}</h3> 
            <h4>Your BMI lies in the obese range</h4>`;
        }else{
            resultDiv.innerHTML =  `<h3>Your BMI is: ${bmi.toFixed(2)}</h3> 
            <h4>Bruh wtf?!</h4>`;
        }

       
    }
}

// Clear all inputs, alerts, and result
function clearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelectorAll('p').forEach(alert => alert.innerHTML = '');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    resultDiv.innerHTML = ''; // Clear BMI result
}

// Event listeners
calculateBtn.addEventListener("click", calculateBMI);
clearBtn.addEventListener("click", clearInputs);
