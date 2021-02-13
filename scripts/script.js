const bubble = document.querySelector(".plant-info");
const map = document.querySelector(".map-container");

map.addEventListener("click", displayBubble);

function displayBubble() {
    bubble.style.display = "block";
}
