// Select the display input
const display = document.getElementById("display");

// Function to add values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {

    try {

        if (display.value === "") {
            return;
        }

        // Evaluate the mathematical expression
        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

        // Clear the error after 1.5 seconds
        setTimeout(() => {
            display.value = "";
        }, 1500);
    }
}