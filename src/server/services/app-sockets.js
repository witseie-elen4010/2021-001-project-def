'use strict'
const MessageService = require('../services/message-service').default
class AppSockets {
  connection (client) {
    client.on('sendTextMessage', (message, groupID) => {
      const req = { messageContent: message.messageText, date: message.messageDate, sender: message.senderID }
      client.broadcast.to(groupID).emit('message', req)
      const res = []
      MessageService.saveMessage(res, req)
        .then((value) => console.log(value))
    })

    client.on('retrieveGroupMessages', (groupID) => { // GroupID is equivalent to Group Name.
      const req = { groupID: groupID }
      const res = {}
      MessageService.getGroupMessages(res, req)
        .then((res) => {
          client.emit('groupMessage', res)
        })
    })
    client.on('subscribe', (groupID) => {
      client.join(groupID)
    })

    client.on('initiateVote', () => {

    })
  }
}

module.exports = new AppSockets()
