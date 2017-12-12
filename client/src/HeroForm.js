import React from 'react'
import Proptypes from 'prop-types'

const HeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit}) => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type='text' onChange={onNameChange} />
      </div>
      <div>
        <label>SuperPower</label>
        <input type='text' onChange={onSuperPowerChange} />
      </div>
      <div>
        <label>Image</label>
        <input type='text' onChange={onImageChange} />
      </div>
      <div>
        <label>Universe</label>
        <input type='text' onChange={onUniverseChange} />
      </div>
      <div>
        <label>Nemesis</label>
        <input type='text' onChange={onNemesisChange} />
      </div>
      <button onClick={handleSubmit}>SUBMIT HERO</button>
    </form>
  )
}

HeroForm.propTypes = {
  onNameChange: Proptypes.func.isRequired,
  onImageChange: Proptypes.func.isRequired,
  onSuperPowerChange: Proptypes.func.isRequired,
  onUniverseChange: Proptypes.func.isRequired,
  onNemesisChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired
}

export default HeroForm
