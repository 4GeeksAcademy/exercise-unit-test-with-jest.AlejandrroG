let oneEuroIs = {
    "JPY": 156.5, // 1 euro = 156.5 yenes
    "USD": 1.07,  // 1 euro = 1.07 dólares
    "GBP": 0.87   // 1 euro = 0.87 libras
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor en Yen
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en Yenes
    return valueInYen;
}
const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor en Pounds
    let valueInPounds = valueInEuro * 0.87;
    // Retornamos el valor en Pounds
    return valueInPounds;
}

module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };
