const jiraData = require('../data/mock-jira-data.json')

const fetchDataFromJira = ticketId => jiraData[ticketId]

module.exports = fetchDataFromJira
