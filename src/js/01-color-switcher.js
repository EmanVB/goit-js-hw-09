function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector("body");
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
stopButton.disabled = true;
let colorChangeInterval = null;

body.style.display = "flex";
body.style.flexDirection = "row";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.gap = "100px";
body.style.height = "100vh";
body.style.width = "auto";

function startColorChange() {
    colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startButton.disabled = true;
        stopButton.disabled = false;
    }, 1000);
}

function stopColorChange() {
    clearInterval(colorChangeInterval);
    startButton.disabled = false;
    stopButton.disabled = true; 
}

startButton.addEventListener("click", startColorChange);
stopButton.addEventListener("click", stopColorChange);