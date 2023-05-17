// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
    // 137,54 es el valor de dolar a yen ha día de hoy
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 137.54;
    return valueInYen
}
    // 0,0058 es el valor del yen a libras esterlinas ha día de hoy
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0058
    return valueInPound
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };