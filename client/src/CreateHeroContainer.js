import React, {Component} from 'react'
import HeroForm from './HeroForm'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  onNameChange = (e) => this.setState({name: e.target.value})
  onSuperPowerChange = (e) => this.setState({superPower: e.target.value})
  onImageChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render () {
    return (
      <div>
        <h3>Create Hero</h3>
        <HeroForm />
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)