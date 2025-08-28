console.log("Calculator: Funciones de cálculo cargadas.");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error("Trazyn dice: No se puede dividir por cero.");
    return a / b;
}

function displayImage() {
    const img_1 = document.getElementById("trazyn");
    const img_2 = document.getElementById("diag");
    img_1.style.display = "block";
    img_2.style.display = "block";
}