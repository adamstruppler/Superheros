import React, {Component} from 'react'
import $ from 'jquery'
import VillainForm from './VillainForm'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

class CreateVillainContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  static propTypes = {
    loadVillainsFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  onNameChange = (e) => this.setState({name: e.target.value})
  onImageChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    $.ajax({
      url: '/api/villains',
      method: 'POST',
      data: villain
    }).done((response) => {
      this.props.loadVillainsFromServer()
      this.props.history.push('/villains')
    })
  }

  render () {
    return (
      <div>
        <h3>Create Villain</h3>
        <VillainForm
          onNameChange={this.onNameChange}
          onImageChange={this.onImageChange}
          onNemesisChange={this.onNemesisChange}
          onUniverseChange={this.onUniverseChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(CreateVillainContainer)
