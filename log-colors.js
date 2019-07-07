const log = require('./helpers/log')
const { SUCCESS, WARNING, ERROR } = require('./constants/message-types')

log('Success', SUCCESS)
log('Warning', WARNING)
log('Error', ERROR)