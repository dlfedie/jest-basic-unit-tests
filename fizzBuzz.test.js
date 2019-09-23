let fizzBuzz = require('./fizzBuzz.js');


describe('fizzBuzz module tests', () => {
    test('given 3 returns Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });
    test('given 4 returns 4', () => {
        expect(fizzBuzz(4)).toBe(4)
    });
    test('given 5 returns Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    });
    test('given 15 return FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
    test('given -5 return Buzz', () => {
        expect(fizzBuzz(-5)).toBe('Buzz')
    });
    test('given 30 returns FizzBuzz', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    });
    test(`given 'aaa' returns 'aaa'`, () => {
        expect(fizzBuzz('aaa')).toBe('aaa')
    })

})