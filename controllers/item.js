const express = require('express')
const Item = require('../models/items')

const router = express.Router();

// INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        res.json(await Item.find({}))
    } catch (error) {
        console.log('Read the error message', error)
    }
})

module.exports = router