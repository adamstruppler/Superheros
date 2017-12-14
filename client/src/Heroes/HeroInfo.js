import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const HeroInfo = ({hero}) => {
  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={hero.img} />
      <h4>{hero.superPower}</h4>
      <h4>{hero.universe}</h4>
      <h4>{hero.nemesis}</h4>
      <Link to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.string.isRequired
}

export default HeroInfo
