//T: Your task is simply to count the total number of lowercase letters in a string.
//
// Examples
// "abc" ===> 3
//
// "abcABC123" ===> 3
//
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
// "" ===> 0;
//
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
// "abcdefghijklmnopqrstuvwxyz" ===> 26

//S:
const lowercaseCount = str => {
    let counter = 0;
    const strSplitted = [...str]
    for (let i = 0; i < strSplitted.length; i++) {
        if (strSplitted[i].match(/[a-z]/)) {
            counter = counter + 1
        }
    }
    return counter
}