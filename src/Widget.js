import axios from "axios";
import { useEffect, useState } from "react";

const Widget = ({ cityInfo }) => {
  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://dataservice.accuweather.com/currentconditions/v1/${cityInfo.Key}?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9`
      )
      .then((response) => {
        setConditions(response.data[0]);
      });
  }, [cityInfo]);

  function getIconName(iconNumber) {
    var weatherIconStr=String(iconNumber);
    if (weatherIconStr.length==1) {weatherIconStr = "0" + weatherIconStr}
    weatherIconStr+= "-s.png";
    return weatherIconStr;
  }

  return (
    <>
      {conditions && (
        <article className="current-conditions-box">
          <p>
            Weather for {cityInfo.EnglishName}, {cityInfo.Country.EnglishName}:
          </p>
          <h3 className="city-country">
            {cityInfo.EnglishName}, {cityInfo.Country.EnglishName}
          </h3>
          <div className="details">
            <h2 className="temperature-value">
              {Math.ceil(conditions.Temperature.Metric.Value)}
              <sup className="deg">
                &deg;{conditions.Temperature.Metric.Unit}
              </sup>
            </h2>
            {/* /TODO: Refactor */}
            <img className="weather-img" src={getIconName(conditions.WeatherIcon)} alt={conditions.WeatherText} width="75px" /> 

            <p className="weather-text">{conditions.WeatherText}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default Widget;
