import { execSync } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Helper function to execute shell commands
const exec = (command: string) => {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing: ${command}`);
    process.exit(1);
  }
};

// Function to generate advanced WebSocket logic
const generateWebSocketLogic = (folderDepth: number, fileIndex: number): string => {
  const uniqueId = uuidv4();
  return `
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
    console.log(\`Connection opened for folder depth ${folderDepth}, file ${fileIndex}\`);
    this.reconnectAttempts = 0;
    this.startPingInterval();
  }

  private onMessage(data: WebSocket.Data) {
    const hash = createHash('sha256').update(data.toString()).digest('hex');
    console.log(\`Received message: \${data}\nMessage hash: \${hash}\`);
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
      console.log(\`Attempting to reconnect... (Attempt \${this.reconnectAttempts})\`);
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
const instanceId = '${uniqueId}';
console.log(\`WebSocket instance created with ID: \${instanceId}\`);

// Example usage
setInterval(() => {
  ws.send(\`Ping from instance \${instanceId}\`);
}, 60000);
  `;
};

// Function to create nested folders and TypeScript files
const createFoldersAndFiles = (path: string, depth: number) => {
  if (depth === 0) {return;}

  for (let i = 1; i <= 10; i++) {
    const folderPath = `${path}/folder_${i}`;
    mkdirSync(folderPath, { recursive: true });

    const filePath = `${folderPath}/websocket_logic_${i}.ts`;
    const content = generateWebSocketLogic(depth, i);
    writeFileSync(filePath, content);

    createFoldersAndFiles(folderPath, depth - 1);
  }
};

// Initialize Git and push the code to GitHub
const initializeGitAndPush = () => {
  exec('git add .');
  exec('git commit -m "✅Initailly created the websocket logic"');
  exec('git push -f origin main');
};

// Main function to coordinate everything
const main = () => {
  console.log('Generating deeply nested folders and TypeScript files with advanced WebSocket logic...');
  createFoldersAndFiles('.', 3); // Creates a 3-level deep structure

  console.log('Committing and force pushing the changes to GitHub...');
  initializeGitAndPush();

  console.log('All done! Check your repository.');
};

// Run the bot
main();
