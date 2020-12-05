const express = require('express');
const router = express.Router();

const inquiries = require('./inquiries-model');

router.get('/', (req, res) => {
    inquiries.getInquiries()
        .then(i => {
            res.status(200).json(i);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'A server error has occurred' });
        })
})

router.post('/', (req, res) => {
    let input = req.body;

    if (!input.email && !input.phone_number) {
        res.status(400).json({ errMsg: 'Please provide email or phone number' })
    } else {
        inquiries.addInquiry(input)
            .then(i => {
                res.status(201).json(i);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'A server error has occurred' });
            })
    }
})

module.exports = router;