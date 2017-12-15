import React from 'react'
import PropTypes from 'prop-types'

const VillainInfo = ({villain}) => {
  return (
    <div>
      <h1>{villain.name}</h1>
      <h3>{villain.universe}</h3>
      <h3>{villain.nemesis}</h3>
      <img src={villain.img} />
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired
}

export default VillainInfo
