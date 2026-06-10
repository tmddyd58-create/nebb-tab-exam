const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so the GitHub Pages site can make requests to the Oracle VM
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Directories for local JSON database
const DATA_DIR = path.join(__dirname, 'data');
const STATES_DIR = path.join(DATA_DIR, 'states');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(STATES_DIR)) fs.mkdirSync(STATES_DIR);

const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Helper to load users
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  } catch (err) {
    console.error("Error loading users database", err);
    return {};
  }
}

// Helper to save users
function saveUsers(users) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (err) {
    console.error("Error saving users database", err);
  }
}

// Helper to hash passwords using built-in crypto
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// REST API Endpoints

// 1. User Registration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  const cleanUsername = username.trim().toLowerCase();
  if (cleanUsername.length < 2) {
    return res.status(400).json({ success: false, message: 'Username must be at least 2 characters.' });
  }

  const users = loadUsers();
  if (users[cleanUsername]) {
    return res.status(400).json({ success: false, message: 'Username is already taken.' });
  }

  users[cleanUsername] = hashPassword(password);
  saveUsers(users);

  // Initialize empty progress file
  const userStatePath = path.join(STATES_DIR, `${cleanUsername}.json`);
  const defaultState = { bookmarks: [], completedExams: [], wrongHistory: {} };
  fs.writeFileSync(userStatePath, JSON.stringify(defaultState, null, 2), 'utf8');

  console.log(`[Register] User registered: ${cleanUsername}`);
  res.json({ success: true, message: 'Registration successful. You can now login.' });
});

// 2. User Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }

  const cleanUsername = username.trim().toLowerCase();
  const users = loadUsers();

  const hashed = hashPassword(password);
  if (!users[cleanUsername] || users[cleanUsername] !== hashed) {
    return res.status(401).json({ success: false, message: 'Invalid username or password.' });
  }

  console.log(`[Login] User logged in: ${cleanUsername}`);
  res.json({ success: true, username: cleanUsername });
});

// 3. Get progress data (Sync)
app.get('/api/sync', (req, res) => {
  const username = req.query.username;
  if (!username) {
    return res.status(400).json({ success: false, message: 'Username parameter is required.' });
  }

  const cleanUsername = username.trim().toLowerCase();
  const userStatePath = path.join(STATES_DIR, `${cleanUsername}.json`);

  if (!fs.existsSync(userStatePath)) {
    return res.json({ bookmarks: [], completedExams: [], wrongHistory: {} });
  }

  try {
    const data = JSON.parse(fs.readFileSync(userStatePath, 'utf8'));
    res.json(data);
  } catch (err) {
    console.error(`Error loading state for user ${cleanUsername}`, err);
    res.status(500).json({ success: false, message: 'Failed to read sync data.' });
  }
});

// 4. Update progress data (Sync)
app.post('/api/sync', (req, res) => {
  const { username, bookmarks, completedExams, wrongHistory } = req.body;
  if (!username) {
    return res.status(400).json({ success: false, message: 'Username is required.' });
  }

  const cleanUsername = username.trim().toLowerCase();
  const userStatePath = path.join(STATES_DIR, `${cleanUsername}.json`);

  const updatedState = {
    bookmarks: bookmarks || [],
    completedExams: completedExams || [],
    wrongHistory: wrongHistory || {}
  };

  try {
    fs.writeFileSync(userStatePath, JSON.stringify(updatedState, null, 2), 'utf8');
    console.log(`[Sync] Progress updated for: ${cleanUsername}`);
    res.json({ success: true });
  } catch (err) {
    console.error(`Error saving state for user ${cleanUsername}`, err);
    res.status(500).json({ success: false, message: 'Failed to write sync data.' });
  }
});

// Serve static web app files on the same server
app.use(express.static(__dirname));

// Default route redirect to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`🚀 NEBB TAB CP Server running at http://localhost:${PORT}`);
  console.log(`📂 Database folder: ${DATA_DIR}`);
  console.log(`===================================================`);
});
