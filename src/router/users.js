const express = require('express')
const router = express.Router()

let users = [
    { id: 1, name: 'Grandhys', email: 'grandhysetyo@gmail.com' },
    { id: 2, name: 'Setyo', email: 'grandhysetyo@gmail.com' }
]

router.get('/users', function(req, res){
    res.json(users)
})

router.post('/users', function(req, res){
    users.push(req.body)
    res.send(users)
})

router.put('/users/:id', function(req, res){
    users.filter(user => {
        if(user.id == req.params.id){
            user.id = req.params.id
            user.name = req.body.name
            user.email = req.body.email
        }
    })
    res.send(users)
})

router.delete('/users', function(req, res){
    res.send('Delete  user')
})

module.exports = router