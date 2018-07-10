var mongoose = require('mongoose')
var MessageSchema = new mongoose.Schema({
  username: String,
  text: String,
  time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Message', MessageSchema)
