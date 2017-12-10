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
      <Link to='/create-hero'>Create Hero</Link>
      <Link to='/villains'>Villains</Link>
      <Link to='/create-villain'>Create Villain</Link>
    </nav>
  )
}

export default NavBar
