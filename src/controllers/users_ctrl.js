let users = [
    
]


module.exports = {
    index: (req, res) => {
        
        res.render('page_user/index', {users})        
    },
    create: (req, res) => {
        users.push(req.body)
        res.send({
            status: true,
            data: users,
            message: 'Data saved successfully!!',
            method: req.method,
            url: req.url
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