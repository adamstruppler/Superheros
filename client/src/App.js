import React, {Component} from 'react'
import Heroes from './Heroes/Heroes'
import Home from './Home'
import NavBar from './Component/NavBar'
import $ from 'jquery'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import Villains from './Villains/Villains'
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
    this.loadVillainsFromServer()
  }

  deleteHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'DELETE'
    }).done((response) => {
      console.log(response)
      this.loadHeroesFromServer()
    })
  }

  deleteVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadVillainsFromServer()
    })
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
      this.setState({villains: response.villain})
    })
  }

  showUniqueHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'GET'
    }).done(response => {
      console.log(response)
      const hero = response.hero
      alert(`${hero.name}, Superpower: ${hero.superPower}`)
    })
  }

  showUniqueVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'GET'
    }).done(response => {
      const villain = response.villain
      alert(`${villain.name}, Universe: ${villain.universe}`)
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
              ? <Route path='/heroes' render={() => <Heroes showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
              : 'No Hero'
          }
          <Route path='/create-villain' render={() => <CreateVillainContainer loadVillainsFromServer={this.loadVillainsFromServer} />} />
          {
            this.state.villains
              ? <Route path='/villains' render={() => <Villains showUniqueVillain={this.showUniqueVillain} deleteVillain={this.deleteVillain} villains={this.state.villains} />} />
              : 'No Villain'
          }
        </div>
      </Router>
    )
  }
}

export default App
