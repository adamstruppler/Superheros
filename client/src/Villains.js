import React from 'react'

const Villains = ({villains}) => {
  return (
    <div>
      <h3>Villains</h3>
      {
        villains.map(villain => {
          return (
            <h1>{villain.name}</h1>
          )
        })
      }
    </div>
  )
}

export default Villains
