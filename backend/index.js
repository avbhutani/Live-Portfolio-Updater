const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const IntroRoutes = require('./routes/IntroRoutes')

require('dotenv').config()
require('./db/Connect')

app.use(cors())
app.use(bodyParser.json())

app.use(IntroRoutes)


app.listen(process.env.PORT || 4000,()=> {
    console.log(`Listening at ${process.env.PORT || 4000}`)
})