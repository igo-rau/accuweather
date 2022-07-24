import { useState } from "react";
import axios from "axios";

import Widget from "./Widget";
import "./App.css";

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [cityInfo, setCityInfo] = useState(null);

  const fetchCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9&q=${citySearch}`
      )
      .then((response) => {
        setCitySearch("");
        setCityInfo(response.data[0]);
        if(!response.data[0]) {alert("Sorry, information not available! Please try again!")};
      });
  };

  return (
    <>
      <header></header>
      <main>
        <div className="App">
          <h1>Integrify assignment July 2022 - Accuweather</h1>
          <form onSubmit={fetchCity}>
            <label htmlFor="cityInput">Enter the city name</label>
            <input
              required
              placeholder="City name"
              id="cityInput"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
          {/* Add "not found" option */}
          {cityInfo && (
            <div>
              <Widget cityInfo={cityInfo} />
            </div>
          )}
        </div> 
      </main>
      <footer>
        <p>Copyright &copy; Igor Rautiainen{" "}
        <a href="https://github.com/igo-rau/accuweather">GitHub</a> </p>
        <p style={{verticalAlign: "center"}}>Weather data provided by <a href="https://www.accuweather.com"> <img src="AW_REGISTERED_Horiz_Transparent_Logo.png" alt="Accuweather" height="14"></img> </a></p>
      </footer>
    </>
  );
}

export default App;
//8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9
