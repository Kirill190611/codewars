//Task: Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//Solution:
function longest(s1, s2) {
    let newString = s1 + s2;

    let newStringObj = new Set(newString.split(""));

    let newStringArr = Array.from(newStringObj)

    let result = newStringArr.sort().join("");

    return result;

    //return Array.from(new Set(s1 + s2)).sort().join('');
}