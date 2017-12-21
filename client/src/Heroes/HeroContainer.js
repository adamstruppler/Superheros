import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import HeroInfo from './HeroInfo'
import $ from 'jquery'

class HeroContainer extends Component {
  state = {
    hero: undefined,
    comments: undefined
  }

  componentDidMount () {
    const heroId = this.props.match.params.heroId
    this.loadHero(heroId)
  }

  loadHero = (id) => {
    $.ajax({
      url: `/api/heroes/${id}`,
      method: 'GET'
    }).done((response) => {
      this.setState({hero: response.hero, comments: response.hero.comments})
    })
  }

  render () {
    return (
      <div>
        <h1>Hello from the hero side...</h1>
        {
          this.state.hero
            ? <HeroInfo
              hero={this.state.hero}
              comments={this.state.comments} />
            : 'No Hero'
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)
