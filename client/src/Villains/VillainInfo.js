import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CommentList from '../Component/CommentList'

const VillainInfo = ({villain, comments}) => {
  return (
    <div>
      <img src={villain.img} />
      <h1>{villain.name}</h1>
      <h3>{villain.universe}</h3>
      <h2>Nemesis:</h2>
      <h3>{villain.nemesis ? villain.nemesis.name : 'No Nemesis'}</h3>
      <h2>Comments:</h2>
      <CommentList comments={comments} />
      <Link to={`/edit-villain/${villain._id}`}>Edit Villain</Link>
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
}

export default VillainInfo
