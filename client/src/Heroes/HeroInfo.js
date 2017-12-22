import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CommentList from '../Component/CommentList'
import CommentForm from '../Component/CommentForm'

const style = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '2%',
    background: '#2c3e50'
  },
  info: {
    color: '#d35400',
    display: 'flex',
    justifyContent: 'center'
  }
}

const HeroInfo = ({hero, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div style={style.container}>
      <img style={style.info} src={hero.img} />
      <h1 style={style.info}>{hero.name}</h1>
      <h3 style={style.info}>{hero.superPower}</h3>
      <h3 style={style.info}>{hero.universe}</h3>
      <h2>Nemesis:</h2>
      <h3 style={style.info}>{hero.nemesis ? hero.nemesis.name : 'No Nemesis'}</h3>
      <h2>Comments:</h2>
      <CommentList comments={comments} />
      <CommentForm
        handleOnTextChange={handleOnTextChange}
        submitComment={submitComment}
        text={text}
      />
      <Link to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default HeroInfo
