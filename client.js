// client.js
 
const WebSocket = require('ws')
const url = 'wss://dommy-backend-do-3wltq.ondigitalocean.app/notifications'
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client') 
}
 
connection.onerror = (error) => {
    console.log(error);
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}