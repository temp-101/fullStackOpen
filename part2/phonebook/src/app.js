import React, { useState } from 'react'
import Person from './components/person'
import Filter from './components/fliter'
import PersonForm from './components/personForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      const newPerson = {
          name: newName,
          number: newNumber,
      }

      function duplicate(people) {
          return people.name === newPerson.name;
      }

      if(persons.find(duplicate)){
          alert(`${newName} is already added to phonebook`)
      }
      else {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      }
  }

  const handleNewName = (event) => {
      setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
      setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
      console.log(newSearch)
      setNewSearch(event.target.value)

  }

  const personsToShow = newSearch
    ?  persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm 
      addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNewName={handleNewName} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <Person key={person.name} person={person} />
        )}
    </div>
  )
}

export default App