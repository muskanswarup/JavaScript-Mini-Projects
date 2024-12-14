let input = document.getElementById("inputBox");
let addButton = document.getElementById("button");
let todos = document.querySelector(".todos");
let errorMessage = document.querySelector(".error");
let listItems = document.querySelectorAll(".myList ul li");
let removeBtns = document.querySelectorAll(".close");
let completedBtns = document.querySelectorAll(".tickMark")

addButton.addEventListener("click", () => {
  console.log("YOu clicked me?");
  errorMessage.innerText = "";

  let inputValue = input.value;

  if (inputValue.trim() !== "") {
    let li = document.createElement("li");

    let tickMark = document.createElement("span");

    tickMark.className = "tickMark";
    tickMark.innerHTML = "&#10004";
    tickMark.style.display = "none";
    li.appendChild(tickMark);

    li.appendChild(document.createTextNode(`${inputValue}`));

    let span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&#10006";
    li.appendChild(span);   


    let ul = document.querySelector(".myList ul");
    ul.appendChild(li);

    inputValue = "";

    span.addEventListener("click" , () => {
        li.remove();
    })

    li.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
          li.style.textDecoration = "none";
          li.style.backgroundColor = "";
          li.className = "checked";
          tickMark.style.display = "none"; 
        } else {
          li.style.textDecoration = "line-through";
          li.style.backgroundColor = "black";
          li.style.color = "white";
          tickMark.style.display = "inline"; 
        }
      });

    input.value = "";
  } else {
    console.log("Value must be provided");

    let para = document.createElement("p");
    para.innerText = "You must provide a value";
    para.style.fontSize = "1.5rem";
    para.style.color = "red";

    errorMessage.appendChild(para);
  }
});



listItems.forEach((item) => {

  item.addEventListener("click", () => {

    let tickMark = item.querySelector(".tickMark");

    if (item.style.textDecoration === "line-through") {
      item.style.textDecoration = "none";
      item.style.backgroundColor = "";
      item.className = "checked";
      tickMark.style.display = "none";
    } else {
      item.style.textDecoration = "line-through";
      item.style.backgroundColor = "black";
      item.style.color = "white";
      tickMark.style.display = "inline";      
    }
  });
});

removeBtns.forEach( (removeBtn)=> {
    removeBtn.addEventListener("click" , () => {
        console.log("remove btn was clicked");
        removeBtn.parentElement.remove();
    })
})

