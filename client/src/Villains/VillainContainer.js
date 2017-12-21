import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import VillainInfo from './VillainInfo'
import $ from 'jquery'

class VillainContainer extends Component {
state = {
  villain: undefined,
  comments: undefined,
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
    this.setState({villain: response.villain, loading: false, comments: response.villain.comments})
  })
}

render () {
  return (
    <div>
      {
        !this.state.loading
          ? <VillainInfo
            villain={this.state.villain}
            comments={this.state.comments} />
          : 'Cant find Villain'
      }
    </div>
  )
}
}

export default withRouter(VillainContainer)
