//Task: Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

//Solution:
const getCount = str => {
    let counter = 0;
    const strSplitted = [...str]
    for (let i = 0; i < strSplitted.length; i++) {
        if (strSplitted[i].match(/[aeiou]/)) {
            counter = counter + 1
        }
    }
    return counter
}