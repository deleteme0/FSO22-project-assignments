import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {

    event.preventDefault()
    console.log(event.target)

    const persObj = {
      name: newName
    }

    setPersons(persons.concat(persObj))

    setNewName("")
    console.log(newName)
  }

  const handleChange = (event) => {
    console.log(event.target.value)

    setNewName(event.target.value)


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value = {newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((each) => <p key={each.name}>{each.name}</p>)}
    </div>
  )
}

export default App