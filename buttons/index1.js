var num = 238;
var celsius = 24;
var fahrenheit = 78;
var doc = document.getElementById("paragraph");

doc.innerHTML = num;

function toggleChange(val, id) {

    if (val == "Change to Celsius") {
        document.getElementById(id).value = "Change to Fahrenheit";
        doc.innerHTML = celsius + " C";

    } else {
        document.getElementById(id).value = "Change to Celsius";
        doc.innerHTML = fahrenheit + " F";
    }
}
