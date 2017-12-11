import React from 'react'
import VillainCard from './VillainCard'
import PropTypes from 'prop-types'

const Villains = ({villains}) => {
  return (
    <div>
      <h3>Villains</h3>
      {
        villains.map(villain => {
          return (
            <VillainCard
              name={villain.name}
              img={villain.img}
              universe={villain.universe}
              nemesis={villain.nemesis}
            />
          )
        })
      }
    </div>
  )
}

Villains.propTypes = {
  villains: PropTypes.string.isRequired
}

export default Villains
