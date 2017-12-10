import React from 'react'

const Heroes = ({name, superPower, img, universe, nemesis}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{superPower}</h1>
      <img src={img} />
      <h1>{universe}</h1>
      <h1>{nemesis}</h1>
    </div>
  )
}

export default Heroes
