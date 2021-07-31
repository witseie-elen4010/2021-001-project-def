'use strict'

const express = require('express')
let response = express().response

const retrieveGroupMessages = async (groupID) => {
  let results = []
  const data = { groupID: groupID }
  response = await fetch('http://localhost:3000/messages/get-messages', { // eslint-disable-line
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
      .then(response => response.json())
      .then(data => {
        results = data
        console.log(results)
      })
      .catch((error) => console.error('Error:', error))
  })
  return response
}

const getUsername = async () => {
  response = await fetch('http://localhost:3000/user/api/username', { //eslint-disable-line
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}
export default { retrieveGroupMessages, getUsername }
