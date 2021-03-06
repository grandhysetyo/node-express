const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const userRouter = require('./src/router/users')

// Express Router
app.use(userRouter)

// default routes
app.get('/', (req, res) => {
    const kelas = {
        id: 1,
        nama: 'Node JS'
    }
    res.json(kelas)
})
app.get('/about', (req, res) => {
    res.redirect('/users')
})

// Routes param
app.get('/book/:id/test/:idBook', function(req,res){
    res.send(req.params)
})

//Route Group
app.route('/books')
    .get(function(req, res){
        res.send('Get book')
    })
    .post(function(req,res){
        res.send('Post book')
    })


app.get('*', function(req, res){
    res.send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})