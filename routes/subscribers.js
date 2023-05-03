const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

// Getting all
router.get('/', async(req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})
// Getting One
router.get('/:id',(req, res) => {
  res.send(req.params.id)
})
// Creating one
router.post('/',(req, res) => {
  
})
// Updating One
router.patch('/:id',(req, res) => {
  
})
// Deleting One
router.delete('/:id',(req, res) => {
  
})

module.exports = router
