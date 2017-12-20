import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import EditHeroForm from './EditHeroForm'

class EditHeroContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    nemesis: undefined,
    superPower: undefined,
    universe: undefined,
    loading: true
  }

  onNameChange = (e) => this.setState({name: e.target.value})
  onSuperPowerChange = (e) => this.setState({superPower: e.target.value})
  onImageChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadHeroFromServer()
  }

  submitHeroToServer = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'PUT',
      data: hero
    }).done((response) => {
      console.log('Res From Put', response)
      alert(`Hero ${response.data.name} was updated`)
      this.props.history.push(`/hero/${response.data._id}`)
    })
  }

  loadHeroFromServer = () => {
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'GET'
    }).done((response) => {
      console.log('Heroe on edit page', response)
      const {name, img, nemesis, universe, superPower} = response.hero
      this.setState({
        name,
        img,
        nemesis,
        superPower,
        universe,
        loading: false
      })
    })
  }

  render () {
    const {name, img, nemesis, universe, superPower} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <EditHeroForm
              name={name}
              img={img}
              nemesis={nemesis}
              universe={universe}
              superPower={superPower}
              onNameChange={this.onNameChange}
              onImageChange={this.onImageChange}
              onSuperPowerChange={this.onSuperPowerChange}
              onNemesisChange={this.onNemesisChange}
              onUniverseChange={this.onUniverseChange}
              submitHeroToServer={this.submitHeroToServer}
              villains={this.props.villains}
            />
            : <h1> Loading....</h1>
        }
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)
