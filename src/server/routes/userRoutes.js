'use strict'

const path = require('path')
const express = require('express')
const userService = require('../services/userService')
const router = express.Router()

// loading search page
router.get('/', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../../', 'client', 'views', 'searchUser.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

// fetching users
router.get('/api/list', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    userService.getAll()
      .then((data) => {
        res.json(data)
      })
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

const dummy = () => {
  return 1
}

module.exports =
{
  dummy: dummy,
  router: router
}
