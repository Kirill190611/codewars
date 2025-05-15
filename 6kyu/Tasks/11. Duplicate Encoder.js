//Task: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//Solution:
const duplicateEncode = word => {
    let initData = [...word.toLowerCase()]
    let data = initData.reduce((acc, el) => {
        if (acc[el]) {
            acc[el] = acc[el] + 1
        } else {
            acc[el] = 1
        }
        return acc
    }, {})

    return initData.map(char => data[char] > 1 ? ')' : '(').join('')
}
