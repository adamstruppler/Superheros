import React from 'react'
import Proptypes from 'prop-types'
import Button from '../Component/Button'

const HeroForm = ({onChangeHandler, handleSubmit, villains}) => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type='text' onChange={onChangeHandler} id={'name'} />
      </div>
      <div>
        <label>SuperPower</label>
        <input type='text' onChange={onChangeHandler} id={'superPower'} />
      </div>
      <div>
        <label>Image</label>
        <input type='text' onChange={onChangeHandler} id={'img'} />
      </div>
      <div>
        <label>Universe</label>
        <input type='text' onChange={onChangeHandler} id={'universe'} />
      </div>
      <div>
        <label>Nemesis</label>
        <select onChange={onChangeHandler} id={'nemesis'}>
          <option>Nothing in here</option>
          {
            villains.map(villain => {
              return <option value={villain._id}>{villain.name}</option>
            })
          }
        </select>
      </div>
      <Button handleClick={handleSubmit}>Submit Hero</Button>
    </form>
  )
}

HeroForm.propTypes = {
  onChangeHandler: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  villains: Proptypes.array.isRequired
}

export default HeroForm
