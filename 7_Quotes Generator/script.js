let nextQuoteBtn =  document.querySelector("#nextQuote");
let quoteContainer = document.querySelector("#quote");
let body = document.querySelector("body");

nextQuoteBtn.addEventListener("click" , ()=>{
    console.log("clicked?");
    generateQuote();
    // toggleColor();
})

let quotes = [
    {
        quote: "Never argue with stupid people, they will only drag you down to their level and beat you with experience.",
        source: "Mark Twain"
    },
    {
        quote: "Life has no limitations except the ones you make.",
        source: "Les Brown"
    },
    {
        quote: "No other animal knows the difference between Friday and Monday.",
        source: "Anonymous"
    },
    {
        quote: "People build too many walls and not enough bridges.",
        source: "Anonymous"
    },
    {
        quote: "Things happen in life that you can’t stop, but that doesn’t mean you should shut out the world.",
        source: "Now And Then"
    },
    {
        quote: "You don’t need bigger boobs. You Need to read better books.",
        source: "Mom"
    },
    {
        quote: "You can’t change how people treat you or what they say about you. All you can do is change how you react to it.",
        source: "Anonymous"
    }
]


let generateQuote = ()=>{
    let length = quotes.length;
    let randomQuoteIndex =  Math.floor(Math.random() * length);
    console.log(quotes[randomQuoteIndex]);
    let randomQuote = quotes[randomQuoteIndex];
    toggleColor();

    quoteContainer.innerHTML = `"${randomQuote.quote}"<br>~ ${randomQuote.source}`;
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

setTimeout(generateQuote , 10000);