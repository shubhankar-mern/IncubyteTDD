const add = require('../stringCalculator');

test('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
});

test('should return 1 for string "1"', () => {
    expect(add('1')).toBe(1);
});

test('should return 6 for string "1,5"', () => {
    expect(add('1,5')).toBe(6);
});

test('should return 20 for string "11,2,3,4"', () => {
    expect(add('11,2,3,4')).toBe(20);
});
test('should return 6 for string "1\n2,3"', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('should return 6 for string (custom delimiter) "//;\n1;2"', () => {
    expect(add('//;\n1;2')).toBe(3);
});


test('should throw an error for negative numbers', () => {
    expect(() => add('-1,2,-3')).toThrow('negative numbers not allowed -1,-3');
});



