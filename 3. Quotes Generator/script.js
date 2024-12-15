let nextQuoteBtn =  document.querySelector("#nextQuote");
let quoteContainer = document.querySelector("#quote");
let body = document.querySelector("body");

nextQuoteBtn.addEventListener("click" , ()=>{
    console.log("clicked?");
    generateQuote();
    // toggleColor();
})


async function fetchQuote(){
    try{
        let response = await fetch("https://api.quotable.io/random");

        if(!response.ok){
            throw new Error("Failed to fetch quote");
        }

        let data = await response.json();
        console.log(data);

        displayQuote(data.content , data.author);
        toggleColor();

    }catch(error){
        console.log(error);
        quoteContainer.innerHTML = "Oops! Failed to load quote. Try again later."
    }
}

function displayQuote(quote, author){
    quoteContainer.innerHTML = `"${quote}"<br><br> ~${author}`;
}


let toggleColor = () => {
    let colors = [
        "cornflowerblue",
        "crimson",
        "cadetblue",
        "coral",
        "salmon",
        "teal",
        "tomato",
        "steelblue",
        "slateblue"
    ];

    let colorLen = colors.length;
    let randomIndex = Math.floor(Math.random() * colorLen);
    let bgColor = colors[randomIndex];
    console.log("bg Color : " + bgColor);
    body.style.backgroundColor = bgColor;
}

nextQuoteBtn.addEventListener("click" , fetchQuote);

fetchQuote();