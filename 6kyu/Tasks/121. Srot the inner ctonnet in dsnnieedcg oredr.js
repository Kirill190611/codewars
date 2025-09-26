//Task: You have to sort the inner content of every word of a string in descending order.
//
// The inner content is the content of a word without first and the last char.
//
// Some examples:
//
// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.
// The string will never be null and will never be empty.
// words will be separated by a single space character
// the string will have neither leading nor trailing spaces
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

//Solution:
const sortTheInnerContent = words => {
    let arr = words.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let inner = [...arr[i]]
        if (inner.length > 1) {
            inner.splice(0, 1)
            inner.splice(inner.length - 1, 1)
            inner.sort().reverse()
            inner.splice(0, 0, arr[i][0])
            inner.splice([arr[i].length - 1], 0, arr[i][arr[i].length - 1])
        }
        result.push(inner.join(''))
    }
    return result.join(' ')
}