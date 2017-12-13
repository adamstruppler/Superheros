import React from 'react'
import PropTypes from 'prop-types'

const VillainCard = ({deleteVillain, villain, showUniqueVillain}) => {
  return (
    <div>
      <h1>{villain.name}</h1>
      <h1>{villain.img}</h1>
      <h1>{villain.universe}</h1>
      <h1>{villain.nemesis}</h1>
      <button onClick={() => deleteVillain(villain)}>Delete</button>
      <button onClick={() => showUniqueVillain(villain)}>Villain Info</button>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.func.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard
