"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var uuid_1 = require("uuid");
// Helper function to execute shell commands
var exec = function (command) {
    try {
        console.log("Executing: ".concat(command));
        (0, child_process_1.execSync)(command, { stdio: 'inherit' });
    }
    catch (error) {
        console.error("Error executing: ".concat(command));
        process.exit(1);
    }
};
// Function to generate advanced WebSocket logic
var generateWebSocketLogic = function (folderDepth, fileIndex) {
    var uniqueId = (0, uuid_1.v4)();
    return "\nimport WebSocket from 'ws';\nimport { createHash } from 'crypto';\n\nclass AdvancedWebSocket {\n  private ws: WebSocket;\n  private reconnectAttempts: number = 0;\n  private maxReconnectAttempts: number = 5;\n  private reconnectInterval: number = 5000;\n  private pingInterval: NodeJS.Timeout | null = null;\n  private pongTimeout: NodeJS.Timeout | null = null;\n\n  constructor(private url: string, private protocols?: string | string[]) {\n    this.ws = new WebSocket(url, protocols);\n    this.setupEventListeners();\n  }\n\n  private setupEventListeners() {\n    this.ws.on('open', this.onOpen.bind(this));\n    this.ws.on('message', this.onMessage.bind(this));\n    this.ws.on('close', this.onClose.bind(this));\n    this.ws.on('error', this.onError.bind(this));\n  }\n\n  private onOpen() {\n    console.log(`Connection opened for folder depth ".concat(folderDepth, ", file ").concat(fileIndex, "`);\n    this.reconnectAttempts = 0;\n    this.startPingInterval();\n  }\n\n  private onMessage(data: WebSocket.Data) {\n    const hash = createHash('sha256').update(data.toString()).digest('hex');\n    console.log(`Received message: ${data}\nMessage hash: ${hash}`);\n  }\n\n  private onClose() {\n    console.log('Connection closed');\n    this.stopPingInterval();\n    this.attemptReconnect();\n  }\n\n  private onError(error: Error) {\n    console.error('WebSocket error:', error);\n  }\n\n  private attemptReconnect() {\n    if (this.reconnectAttempts < this.maxReconnectAttempts) {\n      this.reconnectAttempts++;\n      console.log(`Attempting to reconnect... (Attempt ${this.reconnectAttempts})`);\n      setTimeout(() => {\n        this.ws = new WebSocket(this.url, this.protocols);\n        this.setupEventListeners();\n      }, this.reconnectInterval);\n    } else {\n      console.error('Max reconnect attempts reached. Giving up.');\n    }\n  }\n\n  private startPingInterval() {\n    this.pingInterval = setInterval(() => {\n      this.ws.ping();\n      this.pongTimeout = setTimeout(() => {\n        console.error('Pong not received. Closing connection.');\n        this.ws.terminate();\n      }, 5000);\n    }, 30000);\n  }\n\n  private stopPingInterval() {\n    if (this.pingInterval) clearInterval(this.pingInterval);\n    if (this.pongTimeout) clearTimeout(this.pongTimeout);\n  }\n\n  public send(data: string | Buffer) {\n    if (this.ws.readyState === WebSocket.OPEN) {\n      this.ws.send(data);\n    } else {\n      console.error('WebSocket is not open. Cannot send data.');\n    }\n  }\n}\n\nconst ws = new AdvancedWebSocket('wss://example.com/socket');\n\n// Unique identifier for this instance\nconst instanceId = '").concat(uniqueId, "';\nconsole.log(`WebSocket instance created with ID: ${instanceId}`);\n\n// Example usage\nsetInterval(() => {\n  ws.send(`Ping from instance ${instanceId}`);\n}, 60000);\n  ");
};
// Function to create nested folders and TypeScript files
var createFoldersAndFiles = function (path, depth) {
    if (depth === 0) {
        return;
    }
    for (var i = 1; i <= 10; i++) {
        var folderPath = "".concat(path, "/folder_").concat(i);
        (0, fs_1.mkdirSync)(folderPath, { recursive: true });
        var filePath = "".concat(folderPath, "/websocket_logic_").concat(i, ".ts");
        var content = generateWebSocketLogic(depth, i);
        (0, fs_1.writeFileSync)(filePath, content);
        createFoldersAndFiles(folderPath, depth - 1);
    }
};
// Initialize Git and push the code to GitHub
var initializeGitAndPush = function () {
    exec('git add .');
    exec('git commit -m "✅Initailly created the websocket logic"');
    exec('git push -f origin main');
};
// Main function to coordinate everything
var main = function () {
    console.log('Generating deeply nested folders and TypeScript files with advanced WebSocket logic...');
    createFoldersAndFiles('.', 3); // Creates a 3-level deep structure
    console.log('Committing and force pushing the changes to GitHub...');
    initializeGitAndPush();
    console.log('All done! Check your repository.');
};
// Run the bot
main();
