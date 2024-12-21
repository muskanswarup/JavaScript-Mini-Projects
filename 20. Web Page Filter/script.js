const allTagsBtn = document.getElementsByClassName('all-btn');
const booksBtn = document.getElementsByClassName('books-btn');
const treesBtn = document.getElementsByClassName('tress-btn');
const catsBtn = document.getElementsByClassName('cats-btn');
const dogsBtn = document.getElementsByClassName('dogs-btn');
const inputElem = document.getElementById('search-bar');
const inputBtn = document.getElementById('input-btn');
const allCards = document.querySelectorAll('.card');
const tags = document.querySelectorAll('.tag-name');


// Search bar functionality.
inputBtn.addEventListener("click" , () => {
    // console.log("Btn clicked!");

    // console.log("Input : " , inputElem.value);
    // console.log(allCards);

    allCards.forEach(card => {
        card.classList.remove("show");
        card.classList.remove("none");
    })

    let input = inputElem.value.toLowerCase().trim();


    allCards.forEach(card => {
        if (input === "all") {
            allCards.forEach(card => card.classList.add("show"));
            return; 
        }
        
        if(card.classList.contains(input)){
            card.classList.add("show");
        }else{
            card.classList.add("none");
        }
    })
})

tags.forEach(tag => {
    tag.addEventListener('click' , ()=>{
        const category = tag.textContent.toLowerCase();
        console.log("tag clicked" , category);

        allCards.forEach(card => {
            card.classList.remove("show");
            card.classList.remove("none");
        })

        if(category === 'all'){
            allCards.forEach(card => {
                card.classList.add("show");
            })
            return;

        }

        allCards.forEach(card => {
            if (card.classList.contains(category)) {
                card.classList.add("show");
            } else {
                card.classList.add("none");
            }
        });
    })
})