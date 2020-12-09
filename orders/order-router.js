const express = require('express');
const router = express.Router();

const orders = require('./order-model');

// gets all orders
router.get('/', (req, res) => {
    orders.getAllOrders()
    .then(o => {
        res.status(200).json(o);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'A server error has occurred' });
    })
})

router.get('/:orderId', (req, res) => {
    const { orderId } = req.params;

    orders.findOrderById(orderId)
    .then(o => {
        res.status(200).json(o);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'A server error has occurred' });
    })
})

module.exports = router;