// Array of colors for the slideshow
const colors = ["#4CAF50", "#FF5733", "#33C1FF", "#FFC300", "#8E44AD"];
let currentIndex = 0;

// Function to change the button color
function changeButtonColor() {
    const button = document.getElementById("colorButton");
    button.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Cycle through the colors
}

// Start the color slideshow
setInterval(changeButtonColor, 2000); // Change color every 1000ms (1 second)
