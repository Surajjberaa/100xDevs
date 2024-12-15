import express from 'express'
import { WebSocketServer } from 'ws'
const cors = require('cors');

const app = express()

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(cors())

const httpServer = app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});