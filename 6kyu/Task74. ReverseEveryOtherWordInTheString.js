//Task: Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


//Solution:
function reverse(str){
    return str.split(" ").map((el, index) => {
        return index % 2 !== 0
            ? el.split("")
                .reverse()
                .join("")
            : el
    }).join(" ").trim()
}