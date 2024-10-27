
import WebSocket from 'ws';
import { createHash } from 'crypto';

class AdvancedWebSocket {
  private ws: WebSocket;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectInterval: number = 5000;
  private pingInterval: NodeJS.Timeout | null = null;
  private pongTimeout: NodeJS.Timeout | null = null;

  constructor(private url: string, private protocols?: string | string[]) {
    this.ws = new WebSocket(url, protocols);
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.ws.on('open', this.onOpen.bind(this));
    this.ws.on('message', this.onMessage.bind(this));
    this.ws.on('close', this.onClose.bind(this));
    this.ws.on('error', this.onError.bind(this));
  }

  private onOpen() {
    console.log(`Connection opened for folder depth 1, file 10`);
    this.reconnectAttempts = 0;
    this.startPingInterval();
  }

  private onMessage(data: WebSocket.Data) {
    const hash = createHash('sha256').update(data.toString()).digest('hex');
    console.log(`Received message: ${data}
Message hash: ${hash}`);
  }

  private onClose() {
    console.log('Connection closed');
    this.stopPingInterval();
    this.attemptReconnect();
  }

  private onError(error: Error) {
    console.error('WebSocket error:', error);
  }

  private attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect... (Attempt ${this.reconnectAttempts})`);
      setTimeout(() => {
        this.ws = new WebSocket(this.url, this.protocols);
        this.setupEventListeners();
      }, this.reconnectInterval);
    } else {
      console.error('Max reconnect attempts reached. Giving up.');
    }
  }

  private startPingInterval() {
    this.pingInterval = setInterval(() => {
      this.ws.ping();
      this.pongTimeout = setTimeout(() => {
        console.error('Pong not received. Closing connection.');
        this.ws.terminate();
      }, 5000);
    }, 30000);
  }

  private stopPingInterval() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    if (this.pongTimeout) clearTimeout(this.pongTimeout);
  }

  public send(data: string | Buffer) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    } else {
      console.error('WebSocket is not open. Cannot send data.');
    }
  }
}

const ws = new AdvancedWebSocket('wss://example.com/socket');

// Unique identifier for this instance
const instanceId = '94ab2df5-cf39-4e04-bfd9-348144c87bcd';
console.log(`WebSocket instance created with ID: ${instanceId}`);

// Example usage
setInterval(() => {
  ws.send(`Ping from instance ${instanceId}`);
}, 60000);
  