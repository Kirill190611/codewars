//T: When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Output :: "Position of alphabet: 1"
//
// Note: Only lowercased English letters are tested

//S:
const position = letter => `Position of alphabet: ${letter.charCodeAt(0) - 96}`