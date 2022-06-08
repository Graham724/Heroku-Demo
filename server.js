const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello!')
})

const PORT = 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

// https://demo-123123123.herokuapp.com/