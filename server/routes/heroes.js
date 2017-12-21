const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')
const Comment = require('../models/Comment')

// delete route for comments
Router.route('/api/comments/:commentId')
  .delete((req, res) => {
    const commentId = req.params.commentId
    Comment.remove({_id: commentId}, (err, comment) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Deleted: ${comment}`})
      }
    })
  })

Router.route('/api/heroes')
  .get((req, res) => {
    SuperHero.find()
      .populate('nemesis')
      .populate('comments')
      .exec((err, heroes) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Success', heroes})
        }
      })
  })

Router.route('/api/heroes')
  .post((req, res) => {
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

  // post route for a new comment that is assiciated with a unique hero

Router.route('/api/heroes/:heroId/comments')
  .post((req, res) => {
    const newComment = req.body.text

    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({error: err})
      } else {
        SuperHero.findById({_id: req.params.heroId}, (err, hero) => {
          if (err) {
            res.json({error: err})
          } else {
            hero.comments.push(savedComment._id)
            hero.save((err, updatedHero) => {
              if (err) {
                res.json({error: err})
              } else {
                res.json({msg: 'Success', data: updatedHero})
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .get((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({_id: heroId})
      .populate('nemesis')
      .populate('comments')
      .exec((err, hero) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'Found', hero})
        }
      })
  })

Router.route('/api/heroes/:heroId')
  .delete((req, res) => {
    const deleteId = req.params.heroId
    SuperHero.remove({_id: deleteId}, (err, hero) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'Deleted', hero})
      }
    })
  })

Router.route('/api/heroes/:heroId')
  .put((req, res) => {
    const editHeroId = req.params.heroId
    SuperHero.findById({_id: editHeroId}, (err, hero) => {
      if (err) {
        console.log('ERROR', err)
        res.json({error: err})
      } else {
        hero.name = req.body.name ? req.body.name : hero.name
        hero.superPower = req.body.superPower ? req.body.superPower : hero.superPower
        hero.img = req.body.img ? req.body.img : hero.img
        hero.nemesis = req.body.nemesis ? req.body.nemesis : hero.nemesis
        hero.universe = req.body.universe ? req.body.universe : hero.universe

        hero.save((err, updatedHero) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: 'Successfully Updated', data: updatedHero})
          }
        })
      }
    })
  })

module.exports = Router
