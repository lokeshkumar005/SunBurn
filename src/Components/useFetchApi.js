import { useState, useEffect } from "react";
import axios from "axios";

const useFetchApi = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("jaipur");

  // const [weatherIcon, setWeatherIcon] = useState({
  //   Thunderstorm: "wi-thunderstorm",
  //   Drizzle: "wi-drizzle",
  //   Rain: "wi-rain",
  //   Snow: "wi-snow",
  //   Atmosphere: "wi-atmosphere",
  //   Clear: "wi-clear",
  //   Clouds: "wi-clouds",
  // });

  // const getWeatherIcon = (icon, rangeId) => {
  //   switch (true) {
  //     case rangeId >= 200 && rangeId <= 232:
  //       setWeatherIcon({ icon: weatherIcon.Thunderstorm });
  //       break;
  //     case rangeId >= 300 && rangeId <= 321:
  //       setWeatherIcon({ icon: weatherIcon.Drizzle });
  //       break;
  //     case rangeId >= 500 && rangeId <= 531:
  //       setWeatherIcon({ icon: weatherIcon.Rain });
  //       break;
  //     case rangeId >= 600 && rangeId <= 622:
  //       setWeatherIcon({ icon: weatherIcon.Snow });
  //       break;
  //     case rangeId >= 701 && rangeId <= 781:
  //       setWeatherIcon({ icon: weatherIcon.Atmosphere });
  //       break;
  //     case rangeId >= 800:
  //       setWeatherIcon({ icon: weatherIcon.Clear });
  //       break;
  //     case rangeId >= 801 && rangeId <= 804:
  //       setWeatherIcon({ icon: weatherIcon.Clouds });
  //       break;
  //     default:
  //       setWeatherIcon({ icon: weatherIcon.Clouds });
  //   }
  // };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63dff98e7e0587d43d71c757f65a9ef5`
      )
      .then((response) => {
        setCity(response.data);
        // getWeatherIcon(weatherIcon, city.weather[0].id);
      });
  }, [search]);

  return { city, search, setSearch };
};

export default useFetchApi;
