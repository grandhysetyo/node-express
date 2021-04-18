const express = require('express')
const router = express.Router()

const authCtrl = require('../controllers/auth_ctrl')

router.get('/auth/login', authCtrl.login)
router.get('/auth/register', authCtrl.register)

router.post('/auth/store', authCtrl.store)
router.post('/auth/validation', authCtrl.validation)


module.exports = router