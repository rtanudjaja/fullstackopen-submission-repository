import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if(persons.findIndex(person => person.name === newName) > -1) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, {
        name: newName,
        number: newNumber
      }])
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        data={{
          newName,
          newNumber
        }}
        actions={{
          handleNameChange,
          handleNumberChange,
          handleAdd
        }}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App