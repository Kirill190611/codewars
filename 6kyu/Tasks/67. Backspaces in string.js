//Task: Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//Solution:
function cleanString(s) {
    let result = [];

    s.split('').forEach(el => {
        el === '#' ? result.pop() : result.push(el)
    })

    return result.join('')
}