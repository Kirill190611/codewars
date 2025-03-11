//T: Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

//S:
const noBoringZeros = n => {
    let data = n;
    const length = String(n).length
    for (let i = 0; i <= length; i++) {
        if (data % 10 === 0) {
            data = data / 10
        } else {
            break
        }
    }
    return data
}