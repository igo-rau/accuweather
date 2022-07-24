import axios from "axios";
import { useEffect, useState } from "react";

const Widget = ({ cityInfo }) => {
  const [conditions, setConditions] = useState(null);
  const [forecasts, setForecasts] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://dataservice.accuweather.com/currentconditions/v1/${cityInfo.Key}?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9`
      )
      .then((response) => {
        setConditions(response.data[0]);
      });

    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityInfo.Key}?apikey=8LYjRmrxFnGAGVTSE4qQnc7XxhnO45t9&metric=true`
      )
      .then((response) => {
        setForecasts(response.data.DailyForecasts[0]);
      });
  }, [cityInfo]);

  function getIconName(iconNumber) {
    var weatherIconStr = String(iconNumber);
    if (weatherIconStr.length == 1) {
      weatherIconStr = "0" + weatherIconStr;
    }
    weatherIconStr += "-s.png";
    return weatherIconStr;
  }

  return (
    <>
      {conditions && (
        <article className="current-conditions-box">
          <h2 className="city-country">
            {cityInfo.EnglishName}, {cityInfo.Country.EnglishName}:
          </h2>
          <h2>Current weather:</h2>
          <div className="details">
            <h2 className="temperature-value">
              {Math.ceil(conditions.Temperature.Metric.Value)}
              <sup className="deg">
                &deg;{conditions.Temperature.Metric.Unit}
              </sup>
            </h2>
            <img
              className="weather-img"
              src={getIconName(conditions.WeatherIcon)}
              alt={conditions.WeatherText}
              width="75px"
            />
            <p className="weather-text">{conditions.WeatherText}</p>
          </div>
        </article>)}
        {forecasts && (
        <article>
          <div className="details">
            <h2 className="temperature-value">
              Forecast: {Math.ceil(forecasts.Temperature.Minimum.Value)} to{" "}
              {Math.ceil(forecasts.Temperature.Maximum.Value)}
              <sup className="deg">
                &deg;{conditions.Temperature.Metric.Unit}
              </sup>
            </h2>

            <img
              className="weather-img"
              src={getIconName(forecasts.Day.Icon)}
              alt={forecasts.Day.IconPhrase}
              title={"Day: " + forecasts.Day.IconPhrase}
              width="75px"
            />
            <img
              className="weather-img"
              src={getIconName(forecasts.Night.Icon)}
              alt={forecasts.Night.IconPhrase}
              title={"Night: " + forecasts.Night.IconPhrase}
              width="75px"
            />

            <p className="weather-text">{"Day: " + forecasts.Day.IconPhrase}</p>
            <p className="weather-text">
              {"Night: " + forecasts.Night.IconPhrase}
            </p>
          </div>
        </article>
      )}
    </>
  );
};

export default Widget;
