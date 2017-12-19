import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import EditVillainForm from './EditVillainForm'

class EditVillainContainer extends Component {
  state ={
    name: undefined,
    img: undefined,
    nemesis: undefined,
    universe: undefined,
    loading: true
  }

  onNameChange = (e) => this.setState({name: e.target.value})
  onImageChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadVillainFromServer()
  }

  submitVillainToServer = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'PUT',
      data: villain
    }).done((response) => {
      console.log('Res from Put', response)
      alert(`Villain ${response.data.name} was updated`)
      this.props.history.push(`/villain/${response.villain._id}`)
    })
  }

  loadVillainFromServer = () => {
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'GET'
    }).done((response) => {
      console.log('Hero on edit page', response)
      const {name, img, nemesis, universe} = response.villain
      this.setState({
        name,
        img,
        nemesis,
        universe,
        loading: false
      })
    })
  }

  render () {
    const {name, img, nemesis, universe} = this.state
    return (
      <div>
        <h1>Edit Villain</h1>
        {
          !this.state.loading
            ? <EditVillainForm
              name={name}
              img={img}
              nemesis={nemesis}
              universe={universe}
              onImageChange={this.onImageChange}
              onNameChange={this.onNameChange}
              onNemesisChange={this.onNemesisChange}
              onUniverseChange={this.onUniverseChange}
              submitVillainToServer={this.submitVillainToServer}
            />
            : <h1> Loading....</h1>
        }
      </div>
    )
  }
}

export default withRouter(EditVillainContainer)
