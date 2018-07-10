const express = require('express')
const app = express()

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pradeep_chatapp')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(require('./server/routes'))

app.listen(80, () => {
  console.log('Server is listening on port 80...')
})
