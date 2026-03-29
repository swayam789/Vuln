const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env vars
dotenv.config();

// Route files
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => {
    console.error('MongoDB Connection Error:', err);
    console.log('Connection URI:', process.env.MONGO_URI.replace(/:([^:@]+)@/, ':***@')); // Hide password
    process.exit(1);
});

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000', 'https://vuln-ypnb.onrender.com', 'https://vuln-1-u8jh.onrender.com'],
    credentials: true
}));

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
