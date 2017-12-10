import React, {Component} from 'react'
import Heroes from './Heroes'
import Home from './Home'
import NavBar from './NavBar'
import $ from 'jquery'
import CreateHeroContainer from './CreateHeroContainer'
import CreateVillainContainer from './CreateVillainContainer'
import Villains from './Villains'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount () {
    this.loadHeroesFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      this.setState({heroes: response.heroes})
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done((response) => {
      this.setState({villains: response.villains})
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer} />} />
          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
              : 'No Hero'
          }
          <Route path='/create-villain' render={() => <CreateVillainContainer loadVillainsFromServer={this.loadVillainsFromServer} />} />
          {
            this.state.villains
              ? <Route path='/villains' render={() => <Villains villains={this.state.villains} />} />
              : 'No Villain'
          }
        </div>
      </Router>
    )
  }
}

export default App
