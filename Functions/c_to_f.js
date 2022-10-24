function convertCtoF(currentTemp) {
    let fahrenheit = currentTemp * (9 / 5) + 32;
    return fahrenheit;
}

console.log("100 C = " + convertCtoF(100) + "\n"
+"45 C = " + convertCtoF(45) + "\n"
+"19 C = " + convertCtoF(19) + "\n"
+"0 C = " + convertCtoF(0) + "\n"
+"-7 F = " + convertCtoF(-7) + "\n"
+"-40 F = " + convertCtoF(-40) + "\n");

