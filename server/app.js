require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`listen port at:`, PORT);
})

module.exports = app