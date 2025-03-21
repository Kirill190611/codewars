//Task: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Solution:
const XO = str => {
    let xCounter = 0;
    let yCounter = 0;
    str = [...str.toLowerCase()]
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCounter = xCounter + 1;
        } else if (str[i] === 'o') {
            yCounter = yCounter + 1
        }
    }
    return xCounter === yCounter
}