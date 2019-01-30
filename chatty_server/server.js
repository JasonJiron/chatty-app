// server.js

const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function (message) {
    let parsedMessage = JSON.parse(message)
    parsedMessage.id = uuidv1()
    console.log(parsedMessage);

    if (parsedMessage.type === "postMessage") {
      parsedMessage.type = "incomingMessage"
    } else if (parsedMessage.type === "postNotification") {
      parsedMessage.type = "incomingNotification"
    }
    

    wss.clients.forEach(function (client) {
 

      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  wss.clients.forEach(function (client) {
    let clientCount = {
      type: 'clientCount',
      payload: {
        count: wss.clients.size
      }
    }

    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(clientCount));
    }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    wss.clients.forEach(function (client) {
      let clientCount = {
        type: 'clientCount',
        payload: {
          count: wss.clients.size
        }
      }
      client.send(JSON.stringify(clientCount));
      console.log('Client disconnected');
    });
  });
});