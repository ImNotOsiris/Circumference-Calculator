const PI = 3.14159
let radius

function search(input) {
    if (event.key === "Enter") {
        radius = input.value;
        input.value = ""
        document.getElementById("circHead").innerHTML = calculateCircumference(radius);
    }
}

function calculateCircumference(radius) {
    if (isNaN(radius)) {
        return "Please enter a number"
    } else {
        return 2 * PI * radius;
    }
}