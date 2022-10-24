function convertFtoC(currentTemp){
    let celsius = (currentTemp -32) * (5/9);  
    return celsius;
}

console.log("-40 F = " + convertFtoC(-40) + "\n"
+"212 F = " + convertFtoC(212) + "\n"
+"90 F = " + convertFtoC(90) + "\n"
+"72 F = " + convertFtoC(72) + "\n"
+"32 F = " + convertFtoC(32) + "\n"
+"0 F = " + convertFtoC(0) + "\n");

