const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

ap.get('/', function (req, res) {
    res.send("Hello world")
})

app.get('/test', function (req, res) {
    res.send("Hello world test")
})

app.get('/test2', function (req, res) {
    res.send("test2")
})

app.get('/test3', function (req, res) {
    res.send("test3")
})

app.get('/test4', function (req, res) {
    res.send("test4")
})

app.get('/test5', function (req, res) {
    res.send("test4")
})


app.listen(port, () => {
    console.log(`listening at http://localhost:${port})`)
})