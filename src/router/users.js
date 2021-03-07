const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/users_ctrl')

router.get('/users', usersCtrl.index)
router.get('/users/create', usersCtrl.create)
router.get('/users/:id', usersCtrl.show)
router.post('/users', usersCtrl.store)
router.put('/users/:id', usersCtrl.edit)
router.delete('/users/:id', usersCtrl.delete)

module.exports = router