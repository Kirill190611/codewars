//Task: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.


//Solution:
const UNIT_IN_SECONDS = {
    HOUR: 3600,
    MINUTE: 60,
    SECOND: 1,
}

const humanReadable = seconds => {
    let remainSeconds = seconds;
    const result = [];

    for (const unit in UNIT_IN_SECONDS) {
        if (remainSeconds >= UNIT_IN_SECONDS[unit]) {
            const currentUnit = Math.trunc(remainSeconds / UNIT_IN_SECONDS[unit])
            remainSeconds = remainSeconds - UNIT_IN_SECONDS[unit] * currentUnit
            result.push(currentUnit < 10 ? `0${currentUnit}` : currentUnit)
        } else {
            result.push('00')
        }
    }

    return result.join(':');
}