const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.get('/about', (req, res) => {
    console.log('About Page')
    res.send('About')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

// https://demo-123123123.herokuapp.com/