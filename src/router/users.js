const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/users_ctrl')

router.get('/users', usersCtrl.index)
router.get('/users/create', usersCtrl.create)
router.get('/users/:id', usersCtrl.show)
router.get('/users/:id/edit', usersCtrl.edit)
router.post('/users', usersCtrl.store)
router.post('/users/:id', usersCtrl.update)
router.get('/users/delete/:id', usersCtrl.delete)

module.exports = router