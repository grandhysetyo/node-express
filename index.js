const express = require('express')
const app = express()
const port = 3000
const db = require('./src/models/connection')

// Example middleware 
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
var requestTime = function (req, res, next) {
    req.requestTime = new Date()
    next()
}
  
app.use(requestTime)
app.use(myLogger)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Set Template enggine
app.set('view engine', 'ejs')
app.set('views','./src/views')
app.use('/assets',express.static('public')) // set static folder 'assets' => prefix url

// Import router file
const userRouter = require('./src/router/users')

// Express Router
app.use(userRouter)

// default routes
app.get('/', (req, res) => {
    const kelas = {
        id: 1,
        nama: 'Node JS',
        date: req.requestTime.toString()
    }
    res.render('index', {data: kelas})
})
app.get('/about', (req, res) => {
    res.render('about')
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