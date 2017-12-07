import React from 'react'
import {
  Link
} from 'react-router-dom'

const navStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    padding: '10px',
    background: '#30cfd0',
    justifyContent: 'space-around',
    borderRadius: '10px'
  }
}

const NavBar = () => {
  return (
    <nav style={navStyle.container}>
      <Link to='/'>Home</Link>
      <Link to='/heroes'>Heroes</Link>
    </nav>
  )
}

export default NavBar
