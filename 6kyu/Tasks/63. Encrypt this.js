//Task: Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)
//
// Description:
// Encrypt this!
//
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//Solution:
const encryptThis = string => {
    if (string.length === 0) {
        return false
    }
    const encryptedString = []
    const words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
        const word = words[i].split('')
        word.splice(0, 1, word[0].charCodeAt())
        word.splice(1, 1, words[i][word.length-1])
        word.splice(word.length-1, 1, words[i][1])
        encryptedString.push(word.join(''))
    }
    return encryptedString.join(' ')
}