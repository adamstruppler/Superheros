import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import HeroInfo from './HeroInfo'
import $ from 'jquery'

class HeroContainer extends Component {
  state = {
    hero: undefined,
    comments: undefined,
    text: undefined
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

  submitComment = (e) => {
    e.preventDefault()
    const newComment = {text: this.state.text}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      this.loadHero(this.props.match.params.heroId)
      this.setState({text: ''})
    })
  }

  handleOnTextChange = (e) => this.setState({text: e.target.value})

  render () {
    return (
      <div>
        <h1>Hello from the hero side...</h1>
        {
          this.state.hero
            ? <HeroInfo
              hero={this.state.hero}
              comments={this.state.comments}
              submitComment={this.submitComment}
              handleOnTextChange={this.handleOnTextChange}
              text={this.state.text} />
            : 'No Hero'
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)
