import React, { useState } from 'react';
import axios from 'axios';

const WeatherContext = React.createContext();
const url = 'https://api.openweathermap.org/data/2.5/weather';

function WeatherProvider(props) {
  const [currWeather, setCurrWeather] = useState([]);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [history, setHistory] = useState([]);

  const getTime = () => new Date().toLocaleTimeString();

  const fetchData = async (query) => {
    await axios
      .get(query)
      .then((r) => {
        setCurrWeather([r.data]);
        setError(false);
        setErrorMsg('');
        setHistory([[r.data.name, r.data.sys.country, getTime()], ...history]);
      }).catch((err) => {
        setError(true);
        setErrorMsg(err.response.data.message);
      });
  };

  const searchLocation = (s, val) => {
    setSearch(s);
    const { location } = val;
    const query = `${url}?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    fetchData(query);
    setSearch(false);
  };

  const deleteLocation = (id) => {
    setHistory(history.filter((item, index) => index !== id));
  };

  return (
    <WeatherContext.Provider value={{
      error,
      errorMsg,
      currWeather,
      search,
      searchLocation,
      history,
      deleteLocation,
    }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
