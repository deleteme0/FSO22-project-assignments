import { useState } from 'react'


const Filter = ({persons}) => {

  
  const [newSearch, setSearch] = useState('')

  const handleSearch = (event) => {

    setSearch(event.target.value)
  }


  return (
    <div>
      <input value={newSearch} onChange={handleSearch} />

      {persons.filter((each) => each.name.toLowerCase().includes(newSearch.toLowerCase())).map((each) => <p key={each.name} >{each.name} {each.number}</p>) }


    </div>
  )
}

const PersonsForm = ({persons,setPersons}) =>{

  const [newName,setNewName] = useState('')
  const [newNum,setnewNum] = useState('')

  const handleNumChange = (event) =>{
    setnewNum(event.target.value)
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
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
    setnewNum('')
    const persObj = {
      name: newName,
      number: newNum
    }
    setPersons(persons.concat(persObj))
  }



  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>name: <input value = {newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNum} onChange={handleNumChange} /></div>
        <div><button type="submit">add</button></div>
    </form>
    </div>

  )
}

const Persons = ({persons}) => {

  return(
    <div>
      {persons.map((each) => <p key={each.name}>{each.name} {each.number}</p>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: 12345}
  ]) 

  return (
    <div>

      <h2>Find a Number</h2>
      
      <Filter persons={persons} />

      <h2>Add a Number</h2>

      <PersonsForm persons={persons} setPersons={setPersons}/>

      <h2>Numbers</h2>

      <Persons persons={persons} />
      
    </div>
  )
}

export default App