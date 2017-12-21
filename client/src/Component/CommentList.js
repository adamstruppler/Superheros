import React from 'react'
import PropTypes from 'prop-types'

const CommentList = ({comments}) =>
  <div>
    {
      comments && comments.length > 0
        ? comments.map(comment => {
          return <p key={comment._id}>{comment.text}</p>
        })
        : <p>No Comment</p>
    }
  </div>

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
