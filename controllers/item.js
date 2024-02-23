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

// CREATE ROUTE
router.post('/', async (req, res) => {
    try {
        res.json(await Item.create(req.body))
    } catch (error) {
        console.log('Read the error message', error)
    }
})

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Item.findByIdAndDelete(req.params.id))
    } catch (error) {
        console.log('Read the error message', error)  
    }
})

module.exports = router