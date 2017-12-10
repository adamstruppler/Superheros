import React from 'react'
import HeroCard from './HeroCard'

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

export default Heroes
