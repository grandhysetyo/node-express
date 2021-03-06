const express = require('express')
const router = express.Router()

let users = [
    { id: 1, name: 'Grandhys', email: 'grandhysetyo@gmail.com' },
    { id: 2, name: 'Setyo', email: 'grandhysetyo@gmail.com' }
]

router.get('/users', function(req, res){
    if(users.length){
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    } else {
        res.json({
            status: false,
            message: 'Data users is empty'
        })
    }
})

router.post('/users', function(req, res){
    users.push(req.body)
    res.send({
        status: true,
        data: users,
        message: 'Data saved successfully!!',
        method: req.method,
        url: req.url
    })
})

router.put('/users/:id', function(req, res){
    users.filter(user => {
        if(user.id == req.params.id){
            user.id = req.params.id
            user.name = req.body.name
            user.email = req.body.email

            return user
        }
    })
    res.json({
        status: true,
        data: users,
        message: 'Data has been successfully updated!!',
        method: req.method,
        url: req.url
    })
})

router.delete('/users/:id', function(req, res){
    users = users.filter(user => user.id != req.params.id)
    res.send({
        status: true,
        data: users,
        message: 'Data has been successfully deleted!!',
        method: req.method,
        url: req.url
    })
})

module.exports = router