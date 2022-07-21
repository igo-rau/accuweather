import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Widget from './Widget';

function App() {

  const [citySearch, setCitySearch] =useState('');
  const [cityInfo, setCityInfo] = useState(null);

  const fetchCity=(e)=> {
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9&q=${citySearch}`)
    .then ((response)=>{
      setCitySearch('');
      setCityInfo(response.data[0])
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
        {/* Add "not found" option */}
        {cityInfo&&(
          <div>
            <Widget cityInfo={cityInfo}/>
          </div>
        )}
        

    </div>
  );
}

export default App;
//8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9