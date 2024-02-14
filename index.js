const display = document.getElementById("display");

function appendTodisplay(input) {
    if (display.value.length < 10) {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
