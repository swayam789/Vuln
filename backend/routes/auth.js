const express = require('express');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
    try {
        const { username, password, type } = req.body;

        // Create user
        const user = await User.create({
            username,
            password,
            type: type || 'normal_user' // Default to normal_user
        });

        // Create token
        const token = user.getSignedJwtToken();

        // Update last login
        await user.updateLastLogin();

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                type: user.type,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        console.error(error);
        
        // Handle duplicate username
        if (error.code === 11000 && error.keyPattern?.username) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error during registration'
        });
    }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide username and password'
            });
        }

        // Check for user
        const user = await User.findOne({ username }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Create token
        const token = user.getSignedJwtToken();

        // Update last login
        await user.updateLastLogin();

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                type: user.type,
                bio: user.bio,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error during login'
        });
    }
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                type: user.type,
                bio: user.bio,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error fetching user data'
        });
    }
});

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
router.put('/profile', protect, async (req, res) => {
    try {
        const { username, bio } = req.body;
        
        // Build update object
        const updateFields = {};
        if (username) updateFields.username = username;
        if (bio !== undefined) updateFields.bio = bio;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            updateFields,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                type: user.type,
                bio: user.bio,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error(error);
        
        // Handle duplicate username
        if (error.code === 11000 && error.keyPattern?.username) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error updating profile'
        });
    }
});

module.exports = router;
