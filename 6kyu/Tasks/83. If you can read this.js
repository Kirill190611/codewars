//Task: The idea for this kata came from 9gag today:
//
// The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet
//
// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
//
// Input:
//
// If, you can read?
//
// Output:
//
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
//
// Note:
//
// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

//Solution:
const toNato = words => {
    let telephony = {
        A: "Alfa",
        B: "Bravo",
        C: "Charlie",
        D: "Delta",
        E: "Echo",
        F: "Foxtrot",
        G: "Golf",
        H: "Hotel",
        I: "India",
        J: "Juliett",
        K: "Kilo",
        L: "Lima",
        M: "Mike",
        N: "November",
        O: "Oscar",
        P: "Papa",
        Q: "Quebec",
        R: "Romeo",
        S: "Sierra",
        T: "Tango",
        U: "Uniform",
        V: "Victor",
        W: "Whiskey",
        X: "Xray",
        Y: "Yankee",
        Z: "Zulu",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "0": "Zero"
    }
    let nato = []
    words
        .toUpperCase()
        .split('')
        .map(char => {
            if (char !== " ") {
                val = telephony[char]
                nato.push(val !== undefined ? val : char)
            }
        })
    return nato.join(" ")
}