const { v4: uuidv4 } = require('uuid');
const User = require('../models/users_model')
let users = [
    {id:1, name: 'Gr', email: 'grandhys@gmail.com'},
    {id:2, name: 'Sety', email: 'setyo@gmail.com'},
]


module.exports = {
    index: (req, res) => {        
        let keyword = {}
        if(req.query.keyword) {
            keyword = {name: {$regex: req.query.keyword}}            
        }
        // Metode 1
        // User.find(keyword,'name id', (err, result) => {
        //     if(err) console.log(err)
        //     //success
        //     res.render('page_user/index', {data: result})   
        // })

        // Metode 2 - Query Builder 
        const query = User.find(keyword)
        query.select('name id')
        query.exec((err, result) => {
            if(err) console.log(err)
            //Success
            console.log(result)
            res.render('page_user/index', {data: result})
        })
             
    },
    create: (req, res) => {
        res.render('page_user/create')
    },
    show: (req, res) => {        
        const id = req.params.id
        User.findById(id, (err, result) => {
            if(err) console.log(err)
            //success
            res.render('page_user/show', {data: result})       
        })
         
    },
    edit: (req, res) => {        
        const id = req.params.id
        User.findById(id, (err, result) => {
            if(err) console.log(err)
            //success
            res.render('page_user/edit', {data: result})       
        })
         
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
    update: (req, res) => {
        const dataNew = {
            name: req.body.name,
            email: req.body.email
        }
        const query = {_id: req.params.id}
        User.updateOne(query, dataNew,(err, result) => {
            if(err) console.log(err)
            //Success
            console.log(result)
            res.redirect('/users')
        })                

        
    },
    delete: (req, res) => {
        const id = {_id: req.params.id}
        User.deleteOne(id, (err, result) => {
            if(err) console.log(err)
            //Success
            res.redirect('/users')
        })
    }
}