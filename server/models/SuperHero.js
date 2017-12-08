const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SuperHero = new Schema({
  name: {type: String, required: true},
  superPower: String,
  img: {type: String, required: true},
  universe: {type: String, required: true},
  nemesis: {type: String, required: true}
})

module.exports = mongoose.model('SuperHero', SuperHero)
