function appendNumber(number) {
    document.getElementById("display").value += ""+number;
}


function clearDisplay() {  
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (err) {
        document.getElementById("display").value = "Error";
    }
}
