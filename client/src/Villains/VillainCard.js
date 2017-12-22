import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '../Component/CardHeader'
import {Link} from 'react-router-dom'

const style = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '2%',
    background: '#2c3e50'
  }
}

const VillainCard = ({deleteVillain, villain, showUniqueVillain}) => {
  return (
    <div style={style.container}>
      <CardHeader name={villain.name} img={villain.img} />
      <h3>{villain.universe}</h3>
      <h2>Nemesis:</h2>
      <h3>{villain.nemesis ? villain.nemesis.name : 'No Nemesis'}</h3>
      <button onClick={() => deleteVillain(villain)}>Delete</button>
      <button onClick={() => showUniqueVillain(villain)}>Villain Info</button>
      <Link to={`/villain/${villain._id}`}>View Villain</Link>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.func.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard
