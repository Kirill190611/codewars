//Task: Your task is to add up letters to one letter.
//
// The function will be given a variable amount of arguments, each one being a letter to add.
//
// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

//Solution:
const addLetters = (...letters) => {
    const result = letters.reduce((acc, el) => {
        const addAcc = acc + el.charCodeAt() - 96
        return addAcc > 26 ? addAcc - 26 : addAcc
    } , 0)
    return letters.length === 0 ? 'z' : String.fromCharCode(result + 96)
}