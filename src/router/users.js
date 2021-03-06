const express = require('express')
const router = express.Router()

router.get('/users', function(req, res){
    res.send('Get Data users')
})

router.post('/users', function(req, res){
    res.send('Post user')
})

router.put('/users', function(req, res){
    res.send('Put user')
})

router.delete('/users', function(req, res){
    res.send('Delete  user')
})

module.exports = router