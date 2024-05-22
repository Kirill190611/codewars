//Task: When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// If your language supports it, try using a switch statement.


//Solution:
function switchItUp(number){
//Write your own Code!
    const numbers = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    }

    return numbers[number];
}