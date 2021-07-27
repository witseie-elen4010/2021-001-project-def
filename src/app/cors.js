const cors = require('cors')

cors({
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  headers: ['origin', 'x-requested-with', 'accept', 'create', 'request', 'doPoll', 'poll', 'open', 'doOpen'],
  preflightContinue: false,
  optionsSuccessStatus: 204
})

module.exports = cors
