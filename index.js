import express from 'express';
const app = express();

// Existing middleware and configurations

// Welcome route with student ID
app.get('/', (req, res) => {
  res.send("My Student ID is 21188424. Welcome to Express");
});

// Start server if not already started in another file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
