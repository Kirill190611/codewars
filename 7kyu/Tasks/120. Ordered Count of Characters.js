//Task: Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

//Solution:
const orderedCount = text => [...new Set(text)]
    .map((el, index) => [el, ([...new Set(text)]
        .map(count => text.split(count).length - 1)[index])])