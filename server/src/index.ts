import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db';
import routes from './routes/index.route'
// import authRoutes from './routes/auth';
// import userRoutes from './routes/user';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use("/", routes);
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// Test DB Connection
(async () => {
  try {
    await pool.getConnection();
    console.log('✅ MySQL DB connected successfully');
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err);
  }
})();

// Start Server
// app.use('/',)
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
