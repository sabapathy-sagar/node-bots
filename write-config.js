const path = require('path')

const writeJson = require('./helpers/write-json')
const getJiraData = require('./helpers/get-jira-data')

const args = process.argv.slice(2)
const [ticket] = args

if (!ticket) {
    console.error('Please enter a ticket number')
    process.exit(0)
}

const CONFIG_FILE = 'config.json'
const jiraTicket = ticket || 'DCPPD-2'
const jiraData = getJiraData(jiraTicket)

if (!jiraData) {
    console.log(`Jira ticket: ${jiraTicket} not found`)
    process.exit(0)
} 

const newConfigFile = path.join(__dirname, 'data', CONFIG_FILE)

writeJson(newConfigFile, jiraData)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))