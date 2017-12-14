import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const HeroCard = ({deleteHero, hero, showUniqueHero}) => {
  return (
    <div>
      <h1>{hero.name}</h1>
      <h1>{hero.superPower}</h1>
      <img src={hero.img} />
      <h1>{hero.universe}</h1>
      <h1>{hero.nemesis}</h1>
      <button onClick={() => deleteHero(hero)}>Delete</button>
      <button onClick={() => showUniqueHero(hero)}>Hero Information</button>
      <Link to={`/hero/${hero._id}`}>View Hero</Link>
    </div>
  )
}

HeroCard.propTypes = {
  deleteHero: PropTypes.func.isRequired,
  hero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
