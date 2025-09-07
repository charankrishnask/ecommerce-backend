const Cart = require('../models/Cart');

// Get user cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.item');
        if (!cart) {
            return res.json({ items: [] });
        }
        res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add item to cart
exports.addToCart = async (req, res) => {
    const { itemId, quantity } = req.body;
    const userId = req.user.id;

    try {
        let cart = await Cart.findOne({ user: userId });

        // If cart doesn't exist, create a new one
        if (!cart) {
            cart = new Cart({ user: userId, items: [{ item: itemId, quantity }] });
        } else {
            // If cart exists, check if item is already in the cart
            const itemIndex = cart.items.findIndex(p => p.item.toString() === itemId);

            if (itemIndex > -1) {
                // Item exists, update quantity
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            } else {
                // Item does not exist, add new item
                cart.items.push({ item: itemId, quantity });
            }
        }
        await cart.save();
        const populatedCart = await cart.populate('items.item');
        res.json(populatedCart);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// Remove item from cart
exports.removeFromCart = async (req, res) => {
    const { itemId } = req.params;
    const userId = req.user.id;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        // Filter out the item to be removed
        cart.items = cart.items.filter(({ item }) => item.toString() !== itemId);

        await cart.save();
        const populatedCart = await cart.populate('items.item');
        res.json(populatedCart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};