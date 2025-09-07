const express = require('express');
const router = express.Router();
const { getItems, createItem, createBulkItems } = require('../controllers/itemController');
const auth = require('../middleware/authMiddleware');

// @route   GET api/items
// @desc    Get all items with filtering
router.get('/', getItems);

// @route   POST api/items
// @desc    Create an item (protected)
router.post('/', auth, createItem);

// @route   POST api/items/bulk
// @desc    Create multiple items at once (protected)
router.post('/bulk', auth, createBulkItems); // Add this new route

// You can add PUT and DELETE routes here as well
// router.put('/:id', auth, updateItem);
// router.delete('/:id', auth, deleteItem);


module.exports = router;