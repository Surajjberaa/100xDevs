"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(cors());
const httpServer = app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
const wss = new ws_1.WebSocketServer({ server: httpServer });
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
