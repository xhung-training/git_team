const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

ap.get('/', function (req, res) {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port})`)
})