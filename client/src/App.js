import React from 'react'
import Heroes from './Heroes'
import Home from './Home'
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const App = () =>
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/heroes' component={Heroes} />
    </div>
  </Router>

export default App
