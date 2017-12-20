import React from 'react'
import Proptypes from 'prop-types'

const EditVillainForm = ({
  name, img, universe, nemesis,
  onNameChange, onImageChange,
  onUniverseChange, onNemesisChange, submitVillainToServer, heroes}) =>
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
        <label>Universe</label>
        <input value={universe} onChange={onUniverseChange} />
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
      <button onClick={submitVillainToServer}>Submit</button>
    </form>
  )

EditVillainForm.propTypes = {
  name: Proptypes.string.isRequired,
  img: Proptypes.string.isRequired,
  universe: Proptypes.string.isRequired,
  nemesis: Proptypes.string.isRequired,
  onNameChange: Proptypes.func.isRequired,
  onImageChange: Proptypes.func.isRequired,
  onNemesisChange: Proptypes.func.isRequired,
  onUniverseChange: Proptypes.func.isRequired,
  submitVillainToServer: Proptypes.func.isRequired,
  heroes: Proptypes.array.isRequired
}

export default EditVillainForm
