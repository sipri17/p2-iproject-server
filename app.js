require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})