import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { enquiryRouter } from './routes/enquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vardhani_classes';

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRouter);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    institution: 'Vardhani Classes',
    city: 'Gwalior',
    timestamp: new Date().toISOString()
  });
});

// Database connection & Server initialization
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('Connected to MongoDB database successfully.');
      app.listen(PORT, () => {
        console.log(`Vardhani Classes API server active on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.warn('MongoDB connection failed or skipped. Running in API standby mode:', err.message);
      app.listen(PORT, () => {
        console.log(`Vardhani Classes API server listening on http://localhost:${PORT} (standby mode)`);
      });
    });
}

export default app;
