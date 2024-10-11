//Task: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12)    --> should return "10 + 2"
// expandedForm(42)    --> should return "40 + 2"
// expandedForm(70304) --> should return "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.


//Solution:
function expandedForm(num) {
    return num
        .toString()
        .split("")
        .reverse()
        .map((el, index) => el * Math.pow(10, index))
        .filter(el => el > 0)
        .reverse()
        .join(" + ")
}