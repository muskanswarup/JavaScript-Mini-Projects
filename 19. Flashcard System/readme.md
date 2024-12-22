# Flashcard System

A simple, interactive Flashcard System designed for creating, managing, and displaying flashcards. This project is built with **HTML**, **CSS**, and **JavaScript** to enhance your learning experience.

## Features

- **Add Flashcards**: Create custom flashcards with a question and answer.
- **Show/Hide Answers**: Toggle between displaying and hiding the answers.
- **Responsive Design**: The interface adapts seamlessly to different screen sizes.
- **Dynamic Flashcards**: Newly added flashcards appear in the main interface instantly.
- **Modal Interaction**: Add flashcards through a clean and interactive modal dialog.

## How It Works

1. **Viewing Flashcards**:
   - Existing flashcards are displayed on the main interface.
   - Each flashcard contains a **question**, a **Show Answer** button, and an initially hidden **answer**.

2. **Toggling Answers**:
   - Click the **Show Answer** button on a card to reveal its answer.
   - The button toggles between **Show Answer** and **Hide Answer** based on the current state.

3. **Adding Flashcards**:
   - Click the **Add Flashcard** button to open the modal dialog.
   - Enter the question and answer in the respective fields.
   - Click **Save** to add the new flashcard to the collection.

4. **Cancel Adding Flashcard**:
   - Click the **Delete** button in the modal to clear inputs and return to the main interface.

## Project Structure

### HTML
- **Flashcard Cards**: Displays all the flashcards dynamically.
- **Modal**: Collects input for new flashcards.
  
### CSS
- **Styling**: Enhances visual appeal with hover effects, button transitions, and responsiveness.
- **Themes**: Background images and card styling improve readability.

### JavaScript
- **Dynamic Flashcard Management**:
  - Handles the addition of new cards.
  - Implements show/hide functionality for answers.
- **Modal Handling**:
  - Controls the display of the modal for creating flashcards.
  - Resets input fields after saving or canceling.

## Live Demo:

Check out the live demo of the project here: [Flashcard System](https://flashcard-system-puce.vercel.app/)

## Screenshots 

### Main Interface
![Flashcard_system](https://github.com/user-attachments/assets/c8b8c81f-fc54-4631-b364-22c4fe3474fc)

### Add Flashcard Modal
![Flashcard_modal](https://github.com/user-attachments/assets/6740894e-92e8-49f8-a9ae-29053c12eb15)

## Usage

1. Click on Add Flashcard to create a new flashcard.
2. Fill in the question and answer in the modal dialog and click Save.
3. Interact with the flashcards by toggling the answers with the Show/Hide Answer button.

## Future Enhancements
- Add persistent storage using LocalStorage to save flashcards between sessions.
- Enable editing and deleting individual flashcards.
- Add categories or tags for better organization of flashcards.
- Provide import/export functionality for flashcard data.


## License
This project is licensed under the MIT License. See the LICENSE file for more details.
