const querystring = require('querystring')

// const apiHost = 'https://google.com?'

// const params = {
//     name: 'abc',
//     maxResult: 2
// }

// const apiUrl = `${apiHost}"${querystring.stringify(params)}"`

// console.log(apiUrl)

const url = 'https://google.com?name=abc&maxResult=2'

console.log(querystring.parse(url.substring(url.indexOf('?')+1)))
