const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});