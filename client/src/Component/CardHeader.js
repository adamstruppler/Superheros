import React from 'react'

const style = {
  info: {
    color: '#d35400',
    display: 'flex',
    justifyContent: 'center'
  }
}

const CardHeader = ({img, name}) => {
  return (
    <div>
      <img style={style.info} src={img} />
      <h1 style={style.info}>{name}</h1>
    </div>
  )
}

export default CardHeader
