// server.mjs
import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "https://workshala-7v7q.onrender.com/companyData",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
    optionsSuccessStatus: 204,
  })
);

// Route for handling companyData
app.get('/companyData', (req, res) => {
  // Replace the following example with your actual data retrieval logic
  const jsonData = {
    key: 'value',
    // Other data...
  };

  // Respond with JSON
  res.header('Access-Control-Allow-Credentials', true); // Set the 'Access-Control-Allow-Credentials' header
  res.json(jsonData);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
