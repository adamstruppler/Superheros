import React from 'react'
import PropTypes from 'prop-types'

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
    </div>
  )
}

HeroCard.propTypes = {
  deleteHero: PropTypes.func.isRequired,
  hero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
