import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: "https://workshala-7v7q.onrender.com", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Route for handling companyData
app.get('/companyData', (req, res) => {
  const jsonData = {
    key: 'value',
    // Other data...
  };

  // Respond with JSON
  res.json(jsonData);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
