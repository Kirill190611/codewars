//T: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

//S:
const countSheeps = sheep => {
    let result = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            result = result + 1;
        }
    }
    return result
}

const countSheeps1 = sheep => {
    return sheep.filter(Boolean).length
}