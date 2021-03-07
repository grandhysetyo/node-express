const { v4: uuidv4 } = require('uuid');
const User = require('../models/users_model')
let users = [
    {id:1, name: 'Gr', email: 'grandhys@gmail.com'},
    {id:2, name: 'Sety', email: 'setyo@gmail.com'},
]


module.exports = {
    index: (req, res) => {        
        User.find((err, result) => {
            if(err) console.log(err)
            //success
            res.render('page_user/index', {data: result})   
        })
             
    },
    show: (req, res) => {        
        const id = req.params.id
        User.findById(id, (err, result) => {
            if(err) console.log(err)
            //success
            res.render('page_user/show', {data: result})       
        })
         
    },
    create: (req, res) => {
        res.render('page_user/create')
    },
    store: (req, res) => {
        //Metode save
        // const user = new User({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // })
        // user.save((err, result)=>{
        //     if(err) console.log(err)
        //     console.log(result)
        //     res.redirect('/users')
        // })  
        //end

        //Metode create
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, (err, result) => {
            if(err) console.log(err);
            //success
            console.log(result)
            res.redirect('/users')
        })      
    },
    edit: (req, res) => {
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
    },
    delete: (req, res) => {
        users = users.filter(user => user.id != req.params.id)
        res.send({
            status: true,
            data: users,
            message: 'Data has been successfully deleted!!',
            method: req.method,
            url: req.url
        })
    }
}