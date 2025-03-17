//T: Description:
// Remove all exclamation marks from the end of sentence.
//
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//S:
const remove = string => string.replace(/!*$/g, '')