//Task: Create a function which takes a string as input and returns an array containing the characters in the string whose binary representation of their ASCII code has more zeroes than ones.
//
// The returned array must not contain duplicate characters. Only the first occurrence of each character in the input should be included, keeping the order of appearance.
//
// All input will be valid strings of length > 0. Leading zeroes in binary should not be counted.
//
// Examples
// input = 'abcdea'
//
// characters = [
//      'a',     'b',        'c',       'd',       'e',       'a'
// ]
// ascii codes = [
//     97,       98,         99,        100,       101,       97
// ]
//
// binary = [
//   0b1100001, 0b1100010, 0b1100011, 0b1100100, 0b1100101, 0b1100001
// ]
//
// has more zeroes than ones = [
//     true,      true,      false,     true,      false,      true
// ]
//
// result = [
//     'a',        'b',                 'd'                  // duplicate character
// ]
//
//
//
// 'DIGEST'--> ['D','I','E','T']

//Solution:
const moreZeros = s => {
    let finalArray = [],
        zero_patt = /[0]/g;
    let binArray = [...new Set([...s])]
        .map((char) => char.charCodeAt(0).toString(2))
        .forEach((bin) => {
            let zero_arr = bin.match(zero_patt),
                one_string = bin.replace(zero_patt, ""),
                zero_string = zero_arr ? zero_arr.join("") : false;
            if (zero_string.length > one_string.length) {
                finalArray.push(bin);
            }
        });
    finalArray = finalArray.map((bin) => String.fromCharCode(parseInt(bin, 2)));
    return finalArray;
};