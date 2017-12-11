import React from 'react'
import HeroCard from './HeroCard'
import PropTypes from 'prop-types'

const Heroes = ({heroes}) => {
  return (
    <div>
      <h3>Heroes</h3>
      {
        heroes.map(hero => {
          return (
            <HeroCard
              name={hero.name}
              superPowers={hero.superPowers}
              img={hero.img}
              universe={hero.universe}
              nemesis={hero.nemesis}
            />
          )
        })
      }
    </div>
  )
}

Heroes.propTypes = {
  heroes: PropTypes.string.isRequired
}

export default Heroes
