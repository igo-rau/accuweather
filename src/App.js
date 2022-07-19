import { useState } from 'react';
import './App.css';

function App() {
  const link = "http://www.google.com";
  const [state, setState] = useState(1);
  return (
    <div className="App">
        <h2>Integrify assignment July 2022 - Accuweather</h2>
        <form>
          <label>Enter the city name</label> 
          <input required placeholder='City name'></input>
          <button type='submit'>Submit</button>
        </form>
        <section>
          <div>{state}</div>
          <button onClick={() => setState(state - 1)}>Less</button>
          <button onClick={() => setState(state + 1)}>More</button>
        </section>


      <div className="content">
        <p>test</p>
        <p> {link}</p>
        <a href={link}> Google </a>
      </div>
    </div>
  );
}

export default App;
//8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9