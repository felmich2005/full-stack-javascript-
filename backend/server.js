const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});