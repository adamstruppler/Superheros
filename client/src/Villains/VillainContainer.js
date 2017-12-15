import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import VillainInfo from './VillainInfo'
import $ from 'jquery'

class VillainContainer extends Component {
state = {
  villain: undefined,
  loading: true
}

componentDidMount = () => {
  const villainId = this.props.match.params.villainId
  this.loadVillainFromServer(villainId)
}

loadVillainFromServer = (id) => {
  $.ajax({
    url: `/api/villains/${id}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    this.setState({villain: response.villain, loading: false})
  })
}

render () {
  return (
    <div>
      {
        !this.state.loading
          ? <VillainInfo villain={this.state.villain} />
          : 'Cant find Villain'
      }
    </div>
  )
}
}

export default withRouter(VillainContainer)
