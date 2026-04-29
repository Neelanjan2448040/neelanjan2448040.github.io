import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message, opportunity } = req.body;
  console.log('Received message from:', name);
  
  // Here you would typically send an email using nodemailer
  // For now, we'll just return a success response
  
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Message received! Thank you for reaching out.' 
    });
  }, 1000);
});

// Daily Insight Endpoint
app.get('/api/insight', (req, res) => {
  const insights = [
    "Data is the foundation, but AI is the architect of the future.",
    "The best way to predict the future is to invent it with data.",
    "Complexity is the enemy of execution; simplicity is the soul of AI.",
    "In a world of big data, the small insights often matter the most.",
    "AI doesn't replace people, it replaces tasks, giving people time to create."
  ];
  const randomInsight = insights[Math.floor(Math.random() * insights.length)];
  res.json({ insight: randomInsight });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
