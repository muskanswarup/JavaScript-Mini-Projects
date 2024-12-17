# BMI Calculator 

### Project Overview

This is a Body Mass Index (BMI) Calculator that allows users to calculate their BMI using either US units (pounds and inches) or Metric units (kilograms and centimeters). The calculator provides an easy-to-use interface to input age, gender, height, and weight, and it displays the BMI result on submission. Users can also reset the form to clear all inputs and results.
## Features 

- **Switchable Unit System**: Users can toggle between US units and Metric units for input.
- **BMI Calculation**: Calculate BMI using the following formulas:
                      1. US Units: 
                      2. Metric Units: 
- **Input Validation**: Alerts users if any field is left blank or invalid.
- **Gender Selection**: Users can select their gender (Male/Female) before calculation.
- **Error Messages**: Displays specific alerts for incorrect or missing inputs.
- **Clear Functionality**: Clears all inputs and results on clicking the "Clear" button.

## Tech Stack 

- **HTML**: Structuring the web page.
- **CSS**: Styling for the BMI calculator's layout, alerts, buttons, and input fields.
- **JavaScript**: Implements the logic for BMI calculation, tab switching, input validation, and result display.

## Live Demo:

Check out the live demo of the project here: [BMI Calculator](https://bmi-calculator-sigma-lac.vercel.app/)

## Screenshots 
![BMI_calculator](https://github.com/user-attachments/assets/2bfca5ae-ae7c-4318-838f-6b7841498454)

## Usage Instructions

1. **Choose Unit System**: Click on US Units or Metric Units tab to switch input format.
2. **Enter User Details**:
 - ***Age***: Must be between 2 and 120.
- ***Gender***: Select either "Male" or "Female".
- ***Height***: Enter feet and inches for US units, or centimeters for Metric units.
- ***Weight***: Enter pounds for US units, or kilograms for Metric units.
3. **Click Calculate**: View the calculated **BMI** and a message about the BMI category.
4. **Clear Inputs**: Click the "Clear" button to reset all input fields and results.

## Form Validation
- **Age**: Must be a valid number between 2 and 120.
- **Gender**: User must select a gender (Male or Female) before calculation.
- **Height**:  Must be a positive value. For US units, both feet and inches must be entered.
- **Weight**: Must be a positive number greater than 0.
  If any of these criteria are not met, the user is alerted with an appropriate message.

## Future Enchancements
1. **Local Storage**: Store previous BMI calculations and display a history of results.
2. **Accessibility**: Add keyboard support and better labels for screen readers.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
