import React, {Component} from 'react'
import $ from 'jquery'
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
        <form>
          <div>
            <label>Name</label>
            <input type='text' onChange={this.onNameChange} />
          </div>
          <div>
            <label>Image</label>
            <input type='text' onChange={this.onImageChange} />
          </div>
          <div>
            <label>Universe</label>
            <input type='text' onChange={this.onUniverseChange} />
          </div>
          <div>
            <label>Nemesis</label>
            <input type='text' onChange={this.onNemesisChange} />
          </div>
          <button onClick={this.handleSubmit}>SUBMIT VILLAIN</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateVillainContainer)
