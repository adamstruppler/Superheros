import React from 'react'

import PropTypes from 'prop-types'

const style = {
  container: {
    border: '3px solid black',
    display: 'flex',
    background: 'orange',
    margin: '3%',
    justifyContent: 'center',
    borderRadius: '10px'
  }
}

const CommentCard = ({text}) => {
  return (
    <div style={style.container}>
      <p>{text}</p>
    </div>
  )
}

CommentCard.propTypes = {
  text: PropTypes.string.isRequired
}

export default CommentCard
