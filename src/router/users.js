const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/users_ctrl')

router.get('/users', usersCtrl.index)
router.post('/users', usersCtrl.create)
router.put('/users/:id', usersCtrl.edit)
router.delete('/users/:id', usersCtrl.delete)

module.exports = router