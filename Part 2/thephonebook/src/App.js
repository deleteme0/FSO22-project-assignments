import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: 12345}
  ]) 
  const [newName, setNewName] = useState('')

  const [newNum, setNum] = useState('')

  const [newSearch, setSearch] = useState('')

  const handleSearch = (event) => {

    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    console.log(event.target)

    const n = persons.filter((each) => each.name === newName).length
    
    if (n > 0){
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
      return 
    }
    setNewName("")
    setNum('')
    const persObj = {
      name: newName,
      number: newNum
    }
    setPersons(persons.concat(persObj))

    
    console.log(newName)
    
  }

  const handleChange = (event) => {
    console.log(event.target.value)

    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNum(event.target.value)

  }

  return (
    <div>

      <h2>Find a Number</h2>
      <input value={newSearch} onChange={handleSearch} />

      {persons.filter((each) => each.name.toLowerCase().includes(newSearch.toLowerCase())).map((each) => <p key={each.name} >{each.name} {each.number}</p>) }

      <h2>Add a Number</h2>
      <form onSubmit={handleSubmit}>
        <div>name: <input value = {newName} onChange={handleChange}/></div>
        <div>number: <input value={newNum} onChange={handleNumChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((each) => <p key={each.name}>{each.name} {each.number}</p>)}
    </div>
  )
}

export default App