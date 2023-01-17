import React, { useState } from "react";
import useFetchApi from "./useFetchApi";

export default function Temperature() {
  const [currentTimes, setCurrentTimes] = useState("");
  const [inputText, setInputText] = useState("");

  //custom hook
  const { city, search, setSearch } = useFetchApi();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const updateTime = () => {
    const currentTime = new Date();
    const time =
      weekday[currentTime.getDay()] +
      " | " +
      month[currentTime.getMonth()] +
      " " +
      currentTime.getDate() +
      " | " +
      addZero(
        currentTime.getHours() > 12
          ? currentTime.getHours() - 12
          : currentTime.getHours()
      ) +
      ":" +
      addZero(currentTime.getMinutes());

    setCurrentTimes(time);
  };
  setInterval(updateTime, 1000);

  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const hour = addZero(a.getHours());
    const min = addZero(a.getMinutes());
    const time = hour + ":" + min;
    return time;
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let emoji = null;
  if (typeof city.main != "undefined") {
    if (city.weather[0].main === "Clouds") {
      emoji = "fa-cloud";
    } else if (city.weather[0].main === "Thunderstorm") {
      emoji = "fa-bolt";
    } else if (city.weather[0].main === "Drizzle") {
      emoji = "fa-cloud-rain";
    } else if (city.weather[0].main === "Rain") {
      emoji = "fa-cloud-shower-heavy";
    } else if (city.weather[0].main === "Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smog";
    }
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleClick = () => {
    setSearch(inputText);
    setInputText("");
  };

  return (
    <>
      <div className="containerBody">
        <div className="containerInput">
          <div>
            <input
              placeholder="Enter location"
              type="text"
              value={capitalizeFirst(inputText)}
              onChange={handleChange}
            />
            <button
              disabled={inputText.length === 0}
              type="submit"
              onClick={handleClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div>
            <p>{currentTimes}</p>
          </div>
        </div>
        {!city ? (
          <p id="data"></p>
        ) : (
          <div className="container1">
            <div className="locationIcon">
              <i className="fa-solid fa-location-dot"></i>
              <h2>{capitalizeFirst(search)}</h2>
            </div>
            <div className="feelsLike">
              <i className={`fas ${emoji} fa-4x`}></i>
              {/* <div>{weatherIcon}</div> */}
              {city.main ? (
                <h1
                  style={{
                    textShadow: "2px 3px 5px white",
                  }}
                >
                  {city.main.temp}°C
                </h1>
              ) : (
                ""
              )}
              {city.weather ? <p>Weather ~ {city.weather[0].main}</p> : ""}
              {city.main ? <p>Feels like ~ {city.main.feels_like}</p> : ""}
            </div>
            <div className="bottomData">
              <div className="bold">
                {city.main ? <p>{city.main.temp_min}°C</p> : ""}
                <hr />
                <p>Min</p>
              </div>
              <div className="bold">
                {city.main ? <p>{city.main.temp_max}°C</p> : ""}
                <hr />
                <p>Max</p>
              </div>
              <div className="bold">
                {city.main ? <p>{city.main.humidity}</p> : ""}
                <hr />
                <p>Humidity</p>
              </div>
              <div className="bold">
                {city.sys ? <p>{timeConverter(city.sys.sunrise)}</p> : ""}
                <hr />
                <p>Sunrise</p>
              </div>
              <div className="bold">
                {city.sys ? <p>{timeConverter(city.sys.sunset)}</p> : ""}
                <hr />
                <p>Sunset</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
