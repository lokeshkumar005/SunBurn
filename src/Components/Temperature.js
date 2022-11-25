import React, { useState } from "react";
import useFetchApi from "./useFetchApi";

export default function Temperature(props) {
  const [currentTimes, setCurrentTimes] = useState("");

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

  const addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

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
  return (
    <>
      <div className="containerBody">
        <div className="containerInput">
          <input
            placeholder="Enter location"
            type="text"
            value={capitalizeFirst(search)}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          <p>{currentTimes}</p>
        </div>
        {!city ? (
          <p id="data"></p>
        ) : (
          <div className="container1">
            <h2>{capitalizeFirst(search)}</h2>
            {/* <h2>{city.name}</h2> */}
            <div className="feelsLike">
              <i className={`fas ${emoji} fa-4x`}></i>
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
              <div>
                {city.main ? (
                  <p div className="bold">
                    {city.main.temp_min}°C
                  </p>
                ) : (
                  ""
                )}
                <p>Min</p>
              </div>
              <div>
                {city.main ? (
                  <p div className="bold">
                    {city.main.temp_max}°C
                  </p>
                ) : (
                  ""
                )}
                <p>Max</p>
              </div>
              <div>
                {city.main ? (
                  <p div className="bold">
                    {city.main.humidity}
                  </p>
                ) : (
                  ""
                )}
                <p>Humidity</p>
              </div>
              <div>
                {city.sys ? (
                  <p div className="bold">
                    {timeConverter(city.sys.sunrise)}
                  </p>
                ) : (
                  ""
                )}
                <p>Sunrise</p>
              </div>
              <div>
                {city.sys ? (
                  <p className="bold">{timeConverter(city.sys.sunset)}</p>
                ) : (
                  ""
                )}
                <p>Sunset</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
