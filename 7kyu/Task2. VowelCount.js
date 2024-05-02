//Task: Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


//Solution:
function getCount(str) {
    let result = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {
        if(vowels.includes(char)) {
            result++;
        }
    }
    return result;
}