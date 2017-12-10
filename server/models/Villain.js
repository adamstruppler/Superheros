const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  nemesis: {type: String, required: true},
  universe: {type: String, required: true}
})

module.exports = mongoose.model('Villain', Villain)
