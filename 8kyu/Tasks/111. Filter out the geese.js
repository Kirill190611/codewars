//T: Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:
//
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
//
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

//S:
const gooseFilter = birds => {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const result = []
    for (let i = 0; i < birds.length; i++) {
        if (birds.includes(birds[i]) !== geese.includes(birds[i])) {
            result.push(birds[i])
        }
    }
    return result
};