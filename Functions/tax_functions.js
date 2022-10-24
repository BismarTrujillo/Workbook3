function getSocSecTax(grossPay) {
    let SSTax = grossPay * 0.062;
    return SSTax;
}
function getMedicareTax(grossPay) {
    let medTax = grossPay * 0.0145;
    return medTax;
}
function getFederalTax(grossPay, withHoldingCode) {
    switch (withHoldingCode) {
        case 0:
            taxRate = 0.23;
            break;
        case 1:
            taxRate = 0.21;
            break;
        case 2:
            taxRate = 0.195;
            break;
        case 3:
            taxRate = 0.185;
            break;
        default:
            taxRate = 0.18 - ((withHoldingCode - 4) * 0.005)
            let federaTax = grossPay * taxRate;
            return federaTax;
    }
}
console.log(getFederalTax(1100,6));