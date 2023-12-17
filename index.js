"use strict";
// main.ts
// Function to be executed when the button is clicked
function handleClick() {
    alert("Button clicked!");
}
// Get the button element by its ID
const myButton = document.getElementById("myButton");
// Check if the button element exists
if (myButton) {
    // Add a click event listener to the button
    myButton.addEventListener("click", handleClick);
}
else {
    console.error("Button element not found!");
}
