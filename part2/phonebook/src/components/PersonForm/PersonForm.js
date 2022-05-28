export const PersonForm = ({ data, actions }) => {
  const { newName, newNumber } = data
  const { handleNameChange, handleNumberChange, handleAdd} = actions
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit" onClick={handleAdd}>add</button>
      </div>
    </form>
  )
}