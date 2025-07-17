//Task: Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
//
// choose a text in capital letters including or not digits and non alphabetic characters,
//
// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1
//
// 1 + 2 + 3 -> "CPSO JO 7984!"
//
// 4 "CpSo jO 7984!"
//
// 5 "!4897 Oj oSpC"
//
// With longer passphrases it's better to have a small and easy program. Would you write it?
//
// https://en.wikipedia.org/wiki/Passphrase

//Solution:
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const playPass = (str, num) => {
    const shiftedArr = str.split("").map(char => alphabet.includes(char) ? shiftChar(char, num) : char);
    const compNineArr = shiftedArr.map(char => (isNaN(char) || char === " ") ? char : 9 - char);
    const capArr = compNineArr.map((char, i) => !alphabet.includes(char) ? char : i % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
    return capArr.reverse().join("");
}

const shiftChar = (char, num) => {
    const idx = alphabet.indexOf(char);
    const shiftIdx = idx + num;
    const rotatedIdx = shiftIdx > 25 ? shiftIdx % 26 : shiftIdx;
    return alphabet[rotatedIdx];
}