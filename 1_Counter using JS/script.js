let display = document.querySelector("#display");
let increase = document.querySelector("#increment");
let decrease = document.querySelector("#decrement");
let reset = document.querySelector("#reset");

let counter = 0;

increase.addEventListener("click" , () => {
    counter++;
    display.innerText = counter;
    console.log("You clicked increase");    
})

decrease.addEventListener("click" , () => {
    counter--;
    display.innerText = counter;
    console.log("You clicked decrease");
})

reset.addEventListener("click" , () => {
    display.innerText = 0;
    console.log("Wanna reset?");
})