import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const VillainInfo = ({villain}) => {
  return (
    <div>
      <img src={villain.img} />
      <h1>{villain.name}</h1>
      <h3>{villain.universe}</h3>
      <h2>Nemesis:</h2>
      <h3>{villain.nemesis ? villain.nemesis.name : 'No Nemesis'}</h3>
      <Link to={`/edit-villain/${villain._id}`}>Edit Villain</Link>
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired
}

export default VillainInfo
