const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  text: {type: String, reqiured: true},
  villain: {type: Schema.Types.ObjectId, ref: 'Villain'},
  hero: {type: Schema.Types.ObjectId, ref: 'SuperHero'}
})

module.exports = mongoose.model('Comment', Comment)
