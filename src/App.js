import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const link = "http://www.google.com";
  // const [state, setState] = useState(1);
  const [citySearch, setCitySearch] =useState('');
  const [cityKey, setCityKey] = useState(null);

  const fetchCity=(e)=> {
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9&q=${citySearch}`)
    .then ((response)=>{
      setCitySearch('');
      setCityKey(response.data[0])
      console.log(response.data)});
  }

  return (
    <div className="App">
        <h2>Integrify assignment July 2022 - Accuweather</h2>
        <form onSubmit={fetchCity}>
          <label>Enter the city name</label> 
          <input required placeholder='City name' value={citySearch} onChange={(e)=>setCitySearch(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>


        {/* <section>
          <div>{state}</div>
          <button onClick={() => setState(state - 1)}>Less</button>
          <button onClick={() => setState(state + 1)}>More</button>
        </section>


      <div className="content">
        <p>test</p>
        <p> {link}</p>
        <a href={link}> Google </a>
      </div> */}
    </div>
  );
}

export default App;
//8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9