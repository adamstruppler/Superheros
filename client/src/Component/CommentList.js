import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const CommentList = ({comments}) =>
  <div>
    {
      comments && comments.length > 0
        ? comments.map(comment => {
          return <CommentCard key={comment._id} text={comment.text} />
        })
        : <p>No Comment</p>
    }
  </div>

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
