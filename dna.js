//Write a function that takes in a DNA string  (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.

const dna = function(string) {
    let newArray = []

    for (char of string) {
        if (char === 'C' || char === 'T' || char ==='A' || char === 'G') {
            newArray.push(char)
        }
    }

    let newString = newArray.toString();

    return newString.replace(/,/gi, '');

    return string
}

module.exports = dna;