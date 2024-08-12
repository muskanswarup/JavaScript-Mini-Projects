document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#button");
    const action = document.querySelector("#action");
    const output = document.querySelector("#output");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
        action.textContent = "Listening...";
        action.style.fontSize = "1.4rem";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;

        output.innerHTML = `<strong>Transcript:</strong> ${transcript}<br><strong>Confidence:</strong> ${(confidence * 100).toFixed(2)}%`;
        output.classList.remove("hide");
        output.style.fontSize = "1.4rem";
        output.style.margin = "2rem";
        action.textContent = "";
    };

    recognition.onerror = (event) => {
        action.textContent = `Error occurred in recognition: ${event.error}`;
    };

    recognition.onend = () => {
        button.disabled = false;
        action.textContent = "Click the button to start again.";
    };

    button.addEventListener("click", () => {
        button.disabled = true;
        recognition.start();
    });
});
