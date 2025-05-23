//Task: Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Solution:
const removeUrlAnchor = url => url.indexOf('#') !== -1 ? url.slice(-url.length, url.indexOf('#')) : url