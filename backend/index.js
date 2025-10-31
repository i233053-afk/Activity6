const express = require('express');
const app = express();

// Use PORT from environment (for PM2 / deployment), default to 5000
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests (optional but recommended for APIs)
app.use(express.json());

// Root route for basic test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Example API route
app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is working!',
  });
});

// Start server, listen on all interfaces so it can be accessed via IP
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
