const express = require('express');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Debug endpoint
router.get('/', (req, res) => {
  res.json({
    users: [],
    debug: "CCSA_FLAG{4lw4ys_ch3ck_4pi_r3sp0ns3s}"
  });
});

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private/Admin
router.get('/all', protect, authorize('admin'), async (req, res) => {
    try {
        const users = await User.find().select('-password');
        
        res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// @desc    Update user type (admin only)
// @route   PUT /api/users/:id/type
// @access  Private/Admin
router.put('/:id/type', protect, authorize('admin'), async (req, res) => {
    try {
        const { type } = req.body;

        if (!['normal_user', 'admin'].includes(type)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid type'
            });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { type },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// @desc    Get user statistics (admin only)
// @route   GET /api/users/stats
// @access  Private/Admin
router.get('/stats', protect, authorize('admin'), async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const normalUsers = await User.countDocuments({ type: 'normal_user' });
        const adminUsers = await User.countDocuments({ type: 'admin' });

        const recentUsers = await User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('username type createdAt');

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,
                normalUsers,
                adminUsers
            },
            recentUsers
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
