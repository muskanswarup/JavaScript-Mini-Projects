const container = document.getElementById("clock-container");
const dateContainer = document.getElementById("date-container");
const timeContainer = document.getElementById("time-container");

function getDate() {
  let date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(date);

  dateContainer.textContent = `${date}`;
}


function getTime(){
    
    const time = new Date().toLocaleTimeString('en-US' , {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    timeContainer.textContent = `${time}`;
}

function startClock(){
    getTime();
    setInterval(getTime , 1000);
}

window.onload = function(){
    getDate();
    startClock();
}