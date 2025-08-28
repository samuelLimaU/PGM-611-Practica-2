console.log("App: Script principal cargado.");

document.getElementById("calculate").addEventListener("click", () => {
    try {
        const { num1, num2, operation } = getInputValues();
        validateInputs(num1, num2);

        let result;
        switch (operation) {
            case "add":
                result = add(num1, num2);
                displayImage();
                break;
            case "subtract":
                result = subtract(num1, num2);
                displayImage();
                break;
            case "multiply":
                result = multiply(num1, num2);
                displayImage();
                break;
            case "divide":
                result = divide(num1, num2);
                displayImage();
                break;
            default:
                throw new Error("Trazyn dice: Operación no válida.");
        }

        updateResult(`Trazyn dice: El resultado es ${result}`);
    } catch (error) {
        updateResult(`Trazyn dice: Error ${error.message}`);
    }
});