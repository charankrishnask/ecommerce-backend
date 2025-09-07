const Item = require('../models/Item');

// Get all items with filtering
exports.getItems = async (req, res) => {
    try {
        const { category, price } = req.query;
        const filter = {};

        if (category) {
            filter.category = category;
        }

        if (price) {
            // Example: ?price[lte]=100 (less than or equal to 100)
            // Example: ?price[gte]=50 (greater than or equal to 50)
            filter.price = {};
            if (price.gte) filter.price.$gte = Number(price.gte);
            if (price.lte) filter.price.$lte = Number(price.lte);
        }

        const items = await Item.find(filter);
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new item
exports.createItem = async (req, res) => {
    const { name, description, price, category, imageUrl, stock } = req.body;

    try {
        const newItem = new Item({
            name,
            description,
            price,
            category,
            imageUrl,
            stock,
        });

        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
exports.createBulkItems = async (req, res) => {
    // We expect the body to be an array of items
    const items = req.body;

    try {
        // Make sure we received an array
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ msg: 'Please provide an array of items.' });
        }

        const createdItems = await Item.insertMany(items);
        res.status(201).json(createdItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};