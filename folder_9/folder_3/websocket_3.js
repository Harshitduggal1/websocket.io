
const WebSocket = require('ws');

const ws = new WebSocket('wss://example.com/socket');

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  ws.send('Hello from Folder 2, File 3!');
});

ws.on('message', function incoming(data) {
  console.log('Received:', data);
});

ws.on('close', function close() {
  console.log('Disconnected from WebSocket server');
});

// Keep the connection alive
setInterval(() => {
  ws.ping();
}, 30000);
  