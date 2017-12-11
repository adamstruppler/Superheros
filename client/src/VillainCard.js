import React from 'react'
import PropTypes from 'prop-types'

const VillainCard = ({name, img, universe, nemesis}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{img}</h1>
      <h1>{universe}</h1>
      <h1>{nemesis}</h1>
    </div>
  )
}

VillainCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired
}

export default VillainCard
