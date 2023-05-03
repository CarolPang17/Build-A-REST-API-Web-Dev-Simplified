const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')


// Getting all
router.get('/',(req, res) => {
  res.send('Hello World')
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
