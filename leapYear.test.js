let leapYear = require('./leapYear.js');

describe('leapYear module tests', () => {
    test('given 4 returns true', () => {
        expect(leapYear(4)).toBe(true)
    });
    test('given 3 returns false', () => {
        expect(leapYear(3)).toBe(false)
    });
    test('given 100 return false', () => {
        expect(leapYear(100)).toBe(false)
    });
    test('given 400 returns true', () => {
        expect(leapYear(400)).toBe(true)
    });
    test(`given 'beef' return false`, () => {
        expect(leapYear('beef')).toBe(false)
    });
    test('given 2000 expect true', () => {
        expect(leapYear(2000)).toBe(true)
    });
})