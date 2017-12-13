import React from 'react'
import VillainCard from './VillainCard'
import PropTypes from 'prop-types'

const Villains = ({villains, deleteVillain, showUniqueVillain}) => {
  return (
    <div>
      <h3>Villains</h3>
      {
        villains.map(villain => {
          return (
            <VillainCard
              villain={villain}
              deleteVillain={deleteVillain}
              showUniqueVillain={showUniqueVillain}
            />
          )
        })
      }
    </div>
  )
}

Villains.propTypes = {
  villains: PropTypes.string.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default Villains
