import React, {Component} from 'react'
import HeroForm from './HeroForm'
import $ from 'jquery'
import PropTypes from 'prop-types'
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

  static propTypes = {
    loadHeroesFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    villains: PropTypes.array.isRequired
  }

  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

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
        <HeroForm
          villains={this.props.villains}
          handleSubmit={this.handleSubmit}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)
