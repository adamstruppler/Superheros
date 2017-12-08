import React from 'react'

const Heroes = ({heroes}) => {
  return (
    <div>
      <h3>Heroes</h3>
      {
        heroes.map(hero => {
          return (
            <h1>{hero.name}</h1>
          )
        })
      }
    </div>
  )
}

export default Heroes
