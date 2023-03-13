
import { useState, useEffect } from 'react'
import axios from 'axios'


const Filter = ({persons}) => {

  
  const [newSearch, setSearch] = useState('')

  const handleSearch = (event) => {

    setSearch(event.target.value)
  }

  const removeDups = ele => {

    if (newSearch === ''){
      return false
    }

    return ele.name.toLowerCase().includes(newSearch.toLowerCase())
  }


  return (
    <div>
      <input value={newSearch} onChange={handleSearch} />

      {persons.filter(removeDups).map((each) => <p key={each.name} >{each.name} {each.number}</p>) }


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
    const persObj = {
      name: newName,
      number: newNum
    }

    
    setNewName("")
    setnewNum('')

    setPersons(persons.concat(persObj))

    axios
    .post('http://localhost:3001/persons', persObj)
    .then(response => {
      console.log(response)
    })
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
  const [persons, setPersons] = useState([]) 


  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  },[])

  console.log('before');

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