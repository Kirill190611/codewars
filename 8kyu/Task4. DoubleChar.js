//Task: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Solution:

function doubleChar(str) {
    // Your code here
    let newStr = "";
    let strSplitted = str.split("");
    for (let i = 0; i < strSplitted.length; i++) {
        newStr = newStr + strSplitted[i] + strSplitted[i]

    }
    return newStr;
}