const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

// @route   GET api/cart
// @desc    Get user's cart
router.get('/', auth, getCart);

// @route   POST api/cart
// @desc    Add item to cart
router.post('/', auth, addToCart);

// @route   DELETE api/cart/:itemId
// @desc    Remove item from cart
router.delete('/:itemId', auth, removeFromCart);

module.exports = router;