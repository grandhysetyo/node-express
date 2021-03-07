const { v4: uuidv4 } = require('uuid');
let users = [
    {id:1, name: 'Gr', email: 'grandhys@gmail.com'},
    {id:2, name: 'Sety', email: 'setyo@gmail.com'},
]


module.exports = {
    index: (req, res) => {        
        res.render('page_user/index', {users})        
    },
    show: (req, res) => {        
        const id = req.params.id
        const data = users.filter(user => {
            return user.id == id
        })
        res.render('page_user/show', {data: data[0]})        
    },
    create: (req, res) => {
        res.render('page_user/create')
    },
    store: (req, res) => {
        users.push({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email
        })
        res.redirect('/users')
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