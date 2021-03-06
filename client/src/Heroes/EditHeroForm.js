import React from 'react'
import Proptypes from 'prop-types'

const EditHeroForm = ({
  name, img, superPower, universe, nemesis,
  onNameChange, onImageChange, onSuperPowerChange,
  onUniverseChange, onNemesisChange, submitHeroToServer, villains}) =>
  (
    <form>
      <div>
        <label>Name</label>
        <input value={name} onChange={onNameChange} />
      </div>
      <div>
        <label>Image</label>
        <input value={img} onChange={onImageChange} />
      </div>
      <div>
        <label>Superpower</label>
        <input value={superPower} onChange={onSuperPowerChange} />
      </div>
      <div>
        <label>Universe</label>
        <input value={universe} onChange={onUniverseChange} />
      </div>
      <div>
        <label>Nemesis</label>
        <select onChange={onNemesisChange}>
          <option>Nothing is here</option>
          {
            villains.map(villain => {
              return <option value={villain._id}>{villain.name}</option>
            })
          }
        </select>
      </div>
      <button onClick={submitHeroToServer}>Submit</button>
    </form>
  )

EditHeroForm.propTypes = {
  name: Proptypes.string.isRequired,
  img: Proptypes.string.isRequired,
  superPower: Proptypes.string.isRequired,
  universe: Proptypes.string.isRequired,
  nemesis: Proptypes.string.isRequired,
  onNameChange: Proptypes.func.isRequired,
  onImageChange: Proptypes.func.isRequired,
  onSuperPowerChange: Proptypes.func.isRequired,
  onNemesisChange: Proptypes.func.isRequired,
  onUniverseChange: Proptypes.func.isRequired,
  submitHeroToServer: Proptypes.func.isRequired,
  villains: Proptypes.array.isRequired
}

export default EditHeroForm
