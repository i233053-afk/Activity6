const express = require('express');
const app = express();

// ✅ define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('✅ Hello Manahil! Your backend is running perfectly!');
});

// ✅ choose a port and bind to all interfaces
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
