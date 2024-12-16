const canvas = document.getElementById('meme');
const imageInput = document.getElementById('imageFileInput');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const generateBtn = document.getElementById('button');

generateBtn.addEventListener("click" , ()=>{
    console.log("Button clicked");
    console.log("Top text : ", topText.value);
    console.log("Bottom text : ", bottomText.value);

    const imageDataUrl = URL.createObjectURL(imageInput.files[0]);
    image = new Image();
    image.src = imageDataUrl;

    console.log("Image : ", imageDataUrl);

    image.onload = () => {
        console.log("Image loaded...");
        updateMemeCanvas(canvas,image, topText.value, bottomText.value);
    }

    updateMemeCanvas(canvas, imageDataUrl, topText.value, bottomText.value);

})

function updateMemeCanvas(canvas, image, topText, bottomText){
    const ctx = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image , 0 , 0);

    const fontSize = Math.floor(width / 10);
    const yOffset = height / 10;

    // Prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    // Add top text
    ctx.textBaseline = "top";
    ctx.strokeText(topText , width / 2, yOffset);
    ctx.fillText (topText , width / 2, yOffset);

    // Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText , width / 2, height - yOffset);
    ctx.fillText(bottomText , width / 2, height - yOffset);
}