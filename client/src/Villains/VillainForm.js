import React from 'react'
import Proptypes from 'prop-types'

const VillainForm = ({onNameChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit, heroes}) => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type='text' onChange={onNameChange} />
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
        <select onChange={onNemesisChange}>
          <option>Nothing in here</option>
          {
            heroes.map(hero => {
              return <option value={hero._id}>{hero.name}</option>
            })
          }
        </select>
      </div>
      <button onClick={handleSubmit}>SUBMIT VILLAIN</button>
    </form>
  )
}

VillainForm.propTypes = {
  onNameChange: Proptypes.func.isRequired,
  onImageChange: Proptypes.func.isRequired,
  onUniverseChange: Proptypes.func.isRequired,
  onNemesisChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  heroes: Proptypes.array.isRequired
}

export default VillainForm
