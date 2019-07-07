const {exec} = require('child_process')

const args = process.argv.slice(2)
const [url] = args

if (url === undefined) {
    console.error('Please enter url to visit')
    process.exit(0)
}

const command = `open -a "Google Chrome" ${url}`

console.log(`executing command: ${command}`)

exec(command)
