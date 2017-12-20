import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const VillainCard = ({deleteVillain, villain, showUniqueVillain}) => {
  return (
    <div>
      <img src={villain.img} />
      <h1>{villain.name}</h1>
      <h3>{villain.universe}</h3>
      <h2>Nemesis:</h2>
      <h3>{villain.nemesis ? villain.nemesis.name : 'No Nemesis'}</h3>
      <button onClick={() => deleteVillain(villain)}>Delete</button>
      <button onClick={() => showUniqueVillain(villain)}>Villain Info</button>
      <Link to={`/villain/${villain._id}`}>View Villain</Link>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.func.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard
