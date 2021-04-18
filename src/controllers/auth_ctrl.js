const { v4: uuidv4 } = require('uuid');
const User = require('../models/users_model')

module.exports = {
    login: (req, res) => {
        res.render('page_auth/login')
    },
    register: (req, res) => {
        res.render('page_auth/register')
    },
    store: (req, res) => {
        console.log("OK")
    },
    validation: (req, res) => {
        console.log("OK")
    }
}