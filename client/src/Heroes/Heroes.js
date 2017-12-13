import React from 'react'
import HeroCard from './HeroCard'
import PropTypes from 'prop-types'

const Heroes = ({heroes, deleteHero, showUniqueHero}) => {
  return (
    <div>
      <h3>Heroes</h3>
      {
        heroes.map(hero => {
          return (
            <HeroCard
              hero={hero}
              deleteHero={deleteHero}
              showUniqueHero={showUniqueHero}
            />
          )
        })
      }
    </div>
  )
}

Heroes.propTypes = {
  heroes: PropTypes.string.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default Heroes
