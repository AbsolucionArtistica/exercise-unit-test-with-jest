const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});
    // 137,54 es el valor de dolar a yen ha día de hoy
test("One dolar should be 137.54 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.5)).toBe(481.39)
});
    // 0,0058 es el valor del yen a libras esterlinas ha día de hoy
test("One yen should be 0.0058 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(3.5)).toBe(0.0203)
});