import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const VillainInfo = ({villain}) => {
  return (
    <div>
      <h1>{villain.name}</h1>
      <h3>{villain.universe}</h3>
      <h3>{villain.nemesis}</h3>
      <img src={villain.img} />
      <Link to={`/edit-villain/${villain._id}`}>Edit Villain</Link>
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired
}

export default VillainInfo
