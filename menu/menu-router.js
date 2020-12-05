const express = require('express');
const router = express.Router();

const menu = require('./menu-model');

router.get('/', (req, res) => {
    menu.getFullMenu()
        .then(m => {
            if (m) {
                res.status(200).json(m);
            } else {
                res.status(404).json({ msg: 'No menu items to show at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

router.get('/current', (req, res) => {
    menu.getTodaysMenu()
        .then(m => {
            if (m) {
                res.status(200).json(m);
            } else {
                res.status(404).json({ msg: 'No menu items available at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

router.post('/', (req, res) => {
    let newItem = req.body;

    if (!newItem.item || !newItem.price || !newItem.dinner_or_dessert) {
        res.status(400).json({ errMsg: 'Item, price and dinner_or_dessert are required fields' });
    } else {
        menu.addMenuItem(newItem)
            .then(item => {
                res.status(201).json(item);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'A server error has occurred' });
            })
    }
})

module.exports = router;