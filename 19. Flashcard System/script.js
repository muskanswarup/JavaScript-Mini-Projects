const addCardBtn = document.getElementById("add-card-btn");
const showHideToggle = document.querySelectorAll(".show-hide-btn");
const answers = document.querySelectorAll(".answer");
const modal = document.querySelector(".modal");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const addQues = document.querySelector("#add-question");
const addAns = document.querySelector("#add-answer");
const saveModal = document.querySelector("#save-modal");
const deleteModal = document.querySelector("#delete-modal");

modal.classList.add("hide");

answers.forEach((ans, index) => {
  ans.classList.add("hide");
});

showHideToggle.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log("Btn clicked!", index);

    answers[index].classList.toggle("show");
    answers[index].classList.toggle("hide");

    if (btn.textContent === "Show Answer") {
      btn.textContent = "Hide Answer";
    } else {
      btn.textContent = "Show Answer";
    }
  });
});

addCardBtn.addEventListener("click", () => {
  console.log("Add flashcard btn clicked");
  modal.classList.add("show");
  modal.classList.remove("hide");

  // Ensure all cards are hidden while adding a new flashcard
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.classList.add("hide");
    card.classList.remove("show");
  });
});

saveModal.addEventListener("click", () => {
  const inputQues = addQues.value.trim();
  const inputAns = addAns.value.trim();

  console.log("Ques", inputQues, "ANS", inputAns);

  if (!inputQues || !inputAns) {
    alert("Please fill in both the fields before continuing");
    return;
  }

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const questionElement = document.createElement("p");
  questionElement.classList.add("add-question" , "question");
  questionElement.textContent = inputQues;

  const toggleButton = document.createElement("button");
  toggleButton.classList.add("show-hide-btn");
  toggleButton.textContent = "Show Answer";

  const answerElement = document.createElement("p");
  answerElement.classList.add("answer", "hide");
  answerElement.textContent = inputAns;

  newCard.appendChild(questionElement);
  newCard.appendChild(toggleButton);
  newCard.appendChild(answerElement);

  cards.appendChild(newCard);

  toggleButton.addEventListener("click", () => {
    answerElement.classList.toggle("show");
    answerElement.classList.toggle("hide");

    toggleButton.textContent =
      toggleButton.textContent === "Show Answer" ? "Hide Answer" : "Show Answer";
  });

  addQues.value = "";
  addAns.value = "";

  modal.classList.add("hide");
  modal.classList.remove("show");

  displayAllCards();
});

function displayAllCards() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((c) => {
    c.classList.add("show");
    c.classList.remove("hide");
  });
}

deleteModal.addEventListener("click", () => {
  addQues.value = "";
  addAns.value = "";

  modal.classList.add("hide");
  modal.classList.remove("show");

  displayAllCards();
});
