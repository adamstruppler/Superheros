import React from 'react'
import PropTypes from 'prop-types'

const HeroCard = ({name, superPower, img, universe, nemesis}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{superPower}</h1>
      <img src={img} />
      <h1>{universe}</h1>
      <h1>{nemesis}</h1>
    </div>
  )
}

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  superPower: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired
}

export default HeroCard
