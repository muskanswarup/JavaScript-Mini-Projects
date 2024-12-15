# Hex Color Background Changer

A simple web application that allows users to change the background color of the page by entering a valid hex color code.

## Features

- **Hex Color Validation**: Ensures users input a valid hex color code.
- **Dynamic Background Change**: Updates the background color of the webpage based on the user's input.
- **Error Alerts**: Displays an error message if the input is invalid.
- **Interactive Button**: Button styling dynamically adjusts based on the validity of the input.

## Live Demo

The project is live! Check it out here: [Hex Color Background Changer](https://hex-color-background-change.vercel.app/)

## Screenshots

![Hex_color_bg_change](https://github.com/user-attachments/assets/af5f464e-b1cf-4e5d-9a08-bfdfd533500b)


## How It Works

1. **Input Validation**:
   - Users input a hex color code in the format `#RRGGBB` or `RRGGBB`.
   - The code validates the input using a regular expression to ensure it's a valid hex code.

2. **Button Interaction**:
   - The "Change Color" button is always active but visually indicates the validity of the input with a green or gray background.

3. **Error Handling**:
   - If the input is invalid, a red error message is displayed below the button.
   - The message disappears automatically when a valid input is entered.

4. **Background Update**:
   - On valid input, the background color of the page changes to the specified color.


## Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hex-color-background-changer.git
```
### 2. Open the project
Navigate to the project folder and open index.html in your browser.
```
cd hex-color-background-changer
open index.html
```
### 3. Interact with the app.
- Enter a valid hex color code (e.g., #FF5733 or FF5733).
- Click "Change Color" to update the background.
#### Invalid Input Example
Try entering invalid hex codes like:
1. #1234
2. GGGGGG
3. 12345
4. #ZZZZZZ
 An error message will appear for invalid inputs.

## Technologies Used
#### HTML: Markup structure.
#### CSS: Styling and hover effects.
#### JavaScript: Input validation and DOM manipulation.

## Contributing
Feel free to contribute to this project! Submit a pull request or open an issue if you have suggestions or find bugs.
1. Fork the repository.
2. Create your branch: git checkout -b feature/YourFeatureName.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/YourFeatureName.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
