//Task: Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.
//
// Note:
//
// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)
//
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

//Solution:
function formatWords(words) {
    if (!words || words.length < 1) return '';

    words = words.filter(val => !!val);
    const length = words.length;

    if (!length) return '';


    return words.reduce((acc, cumul, index) => {
        return index + 1 === length ?
            `${acc} and ${cumul}` :
            `${acc}, ${cumul}`
    });
}