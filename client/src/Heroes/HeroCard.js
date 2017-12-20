import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const style = {
  constainer: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '2%',
    background: '#2c3e50'
  },
  info: {
    color: '#d35400',
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px'
  }
}

const HeroCard = ({deleteHero, hero, showUniqueHero}) => {
  return (
    <div style={style.constainer}>
      <div>
        <img style={style.info} src={hero.img} />
        <h1 style={style.info}>{hero.name}</h1>
        <h3 style={style.info}>{hero.superPower}</h3>
        <h3 style={style.info}>{hero.universe}</h3>
        <h2>Nemesis:</h2>
        <h3 style={style.info}>{hero.nemesis ? hero.nemesis.name : 'No Nemesis'}</h3>
      </div>
      <div style={style.button}>
        <button onClick={() => deleteHero(hero)}>Delete</button>
        <button onClick={() => showUniqueHero(hero)}>Hero Information</button>
        <Link to={`/hero/${hero._id}`}>View Hero</Link>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  deleteHero: PropTypes.func.isRequired,
  hero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
