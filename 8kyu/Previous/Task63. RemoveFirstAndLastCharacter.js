//Task: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.


//Solution:
function removeChar(str){
    //You got this!
    let str1 = str.split("");
    str1.shift();
    str1.pop();

    return str1.join("");
};