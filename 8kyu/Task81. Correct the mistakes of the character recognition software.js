//Task: Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


//Solution:
function correct(string)
{
    let newString = "";
    let str1 = string.split("");
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === "0") {
            newString = newString + "O"
        } else if (str1[i] === "5") {
            newString = newString + "S"
        }
        else if (str1[i] === "1") {
            newString = newString + "I"
        } else {
            newString = newString + str1[i]
        }
    }
    return newString;
}