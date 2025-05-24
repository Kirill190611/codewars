//Task: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//Solution:
const solution = str => {
    const string = str.length % 2 === 0 ? str : str + '_'
    const result = []
    for (let i = 0; i < string.length; i = i + 2) {
        result.push(string[i] + string[i + 1])
    }
    return result
}