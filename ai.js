const { execSync } = require('child_process');
const { writeFileSync, mkdirSync } = require('fs');
const path = require('path');

// Helper function to execute shell commands
const exec = (command) => {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing: ${command}`);
    process.exit(1);
  }
};

// Function to generate WebSocket logic
const generateWebSocketLogic = (folderDepth, fileIndex) => {
  return `
const WebSocket = require('ws');

const ws = new WebSocket('wss://example.com/socket');

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  ws.send('Hello from Folder ${folderDepth}, File ${fileIndex}!');
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
  `;
};

// Function to create nested folders and files
const createFoldersAndFiles = (basePath, depth) => {
  if (depth === 0) {return;}

  for (let i = 1; i <= 10; i++) {
    const folderPath = path.join(basePath, `folder_${i}`);
    mkdirSync(folderPath, { recursive: true });

    const filePath = path.join(folderPath, `websocket_${i}.js`);
    const content = generateWebSocketLogic(depth, i);
    writeFileSync(filePath, content);

    createFoldersAndFiles(folderPath, depth - 1);
  }
};

// Initialize Git and push the code to GitHub
const initializeGitAndPush = () => {
  exec('git add .');
  exec(`git commit -m "Add nested folders with WebSocket logic (${new Date().toISOString()})"`);
  exec('git push origin main');
};

// Main function to coordinate everything
const main = () => {
  console.log('Generating nested folders and files with WebSocket logic...');
  createFoldersAndFiles('.', 3); // Creates a 3-level deep structure

  console.log('Committing and pushing the changes to GitHub...');
  initializeGitAndPush();

  console.log('All done! Check your repository.');
};

// Run the script
main();