import { useState, useEffect } from "react";
// import axios from "axios";

const useFetchApi = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("jaipur");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63dff98e7e0587d43d71c757f65a9ef5`
  //     )
  //     .then((response) => {
  //       setCity(response);
  //       console.log(response);
  //     });
  // }, [search]);

  // return { city, search, setSearch };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=63dff98e7e0587d43d71c757f65a9ef5`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  }, [search]);

  return { city, search, setSearch };
};

export default useFetchApi;
