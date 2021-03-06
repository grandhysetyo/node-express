const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
  
app.get('/users', function(req, res){
    res.send('Get Data users')
})

app.post('/users', function(req, res){
    res.send('Post user')
})

app.put('/users', function(req, res){
    res.send('Put user')
})

app.delete('/users', function(req, res){
    res.send('Delete  user')
})
// Routes param
app.get('/user/:id/book/:idBook', function(req,res){
    res.send(req.params)
})

app.get('*', function(req, res){
    res.send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})