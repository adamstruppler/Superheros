const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Villain = new Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  nemesis: {type: Schema.Types.ObjectId, ref: 'SuperHero'},
  universe: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Villain', Villain)
