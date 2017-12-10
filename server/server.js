const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')
const Villain = require('./models/Villain')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/superheros')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/heroes', (req, res) => {
  const {name, superPower, img, universe, nemesis} = req.body
  const newHero = {name, superPower, img, universe, nemesis}
  SuperHero(newHero).save((err, savedHero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Uploaded', data: savedHero})
    }
  })
})

app.get('/api/heroes', (req, res) => {
  SuperHero.find((err, heroes) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Success', heroes})
    }
  })
})

app.get('/api/heroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({_id: heroId}, (err, hero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Found', hero})
    }
  })
})

app.delete('/api/heroes/:heroId', (req, res) => {
  const deleteId = req.params.heroId
  SuperHero.remove({_id: deleteId}, (err, hero) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Deleted', hero})
    }
  })
})

app.post('/api/villains', (req, res) => {
  const {name, img, nemesis, universe} = req.body
  const newVillain = {name, img, nemesis, universe}
  Villain(newVillain).save((err, savedVillain) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Created!', data: savedVillain})
    }
  })
})

app.get('/api/villains', (req, res) => {
  Villain.find((err, villain) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Success', villain})
    }
  })
})

app.delete('/api/villains/:villainId', (req, res) => {
  const deleteId = req.params.villainId
  Villain.remove({_id: deleteId}, (err, villain) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'Deleted', villain})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
