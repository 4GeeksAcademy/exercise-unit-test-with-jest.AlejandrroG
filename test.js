test("Un euro son 1.07 dolares", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 3.5 * 1.07
});

test("On dolar son 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = 1 * (156.5 / 1.07); // ≈ 146.26
    expect(fromDollarToYen(1)).toBeCloseTo(expected); 
});

test("Un Yen son 0.00556 Pound", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = 1 * (0.87 / 156.5); // ≈ 0.00556
    expect(fromYenToPound(1)).toBeCloseTo(expected); 
});
