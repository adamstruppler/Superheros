import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CommentList from '../Component/CommentList'

const HeroInfo = ({hero, comments}) => {
  return (
    <div>
      <img src={hero.img} />
      <h1>{hero.name}</h1>
      <h3>{hero.superPower}</h3>
      <h3>{hero.universe}</h3>
      <h2>Nemesis:</h2>
      <h3>{hero.nemesis ? hero.nemesis.name : 'No Nemesis'}</h3>
      <h2>Comments:</h2>
      <CommentList comments={comments} />
      <Link to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
}

export default HeroInfo
