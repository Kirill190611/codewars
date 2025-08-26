//Task: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//Solution:
const w = 'www.'
const s = '//'

const getDomain = (url, string) => {
    const startedDomain = url.indexOf(string) + string.length
    url = url.substring(startedDomain)
    return url.split('.')[0]
}

const domainName = url => {
    if (url.includes(w)) {
        return getDomain(url, w)
    }
    if (url.includes(s)) {
        return getDomain(url, s)
    }
    return url.split('.')[0]
}