import { useEffect, useState } from 'react';
import dataservies from './services/thedata'


const ShowCountries = ({currFilter,countryData}) => {

  const act = countryData.filter((each) => {
    return each.name.common.includes(currFilter)
  })

  console.log(act.length)

  if (act.length >= 10){
    return (
      <p>Too Many matches, Specify more filters</p>
    )
  }

  if (act.length >= 2){
    return (
      <div>
        {act.map((each,i) => <p key={i}>{each.name.common} </p>)}
      
      </div>
    )
  }

  if (act.length === 0){
    return(
      <div></div>
    )
  } 

  const curr = act[0];
  console.log(curr);
  console.log(curr.languages)

  var arr = []
  for(var key in curr.languages){
    arr.push(curr.languages[key])
  }

  return(
    <div>
      <h1>{curr.name.common}</h1>
      <p>Capital - {curr.capital}</p>
      <p>area {curr.area}</p>
      <br/>
      <h2>Languages</h2>
      <ul>
        {arr.map((each,i) => <li key={i}>{each}</li>)}
      </ul>
    </div>
  )
  //{curr.languages.map((element,i) => <li key={i}> {element}</li> )}
  
}

const Filter = ({currFilter,setCurrentFilter}) =>{

  const handleFilter = (event) => {
    if (event.target.value === undefined){
      setCurrentFilter('');
    }else{
      setCurrentFilter(event.target.value)
    }
  }

  return (
    <div>
      <p>find countries   <input value={currFilter} onChange={handleFilter} /> </p> 
    </div>
  )
}

const App = () => {

  const [countryData,setCountryData] = useState([])
  const [currFilter,setCurrentFilter] = useState('')
  
  useEffect(()=>{
    dataservies.getAll().then(response => {setCountryData(response.data)}).catch(() => {
      console.log("Couldnt get data from server")
    }
      )
  },[])


  return (
    <div>
      <Filter setCurrentFilter={setCurrentFilter} currFilter={currFilter} />
      <ShowCountries currFilter={currFilter} countryData={countryData} />
    </div>
  )
}

export default App;
