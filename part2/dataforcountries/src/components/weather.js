import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherinfo";

const Weather = ({ capital }) => {
	const [weatherData, setWeatherData] = useState();
	const [hasData, setHasData] = useState(false);

	useEffect(() => {
		const api_key = process.env.REACT_APP_API_KEY;
		const params = {
			access_key: api_key,
			query: capital,
		};
		axios
			.get("http://api.weatherstack.com/current", { params })
			.then((response) => {
				setWeatherData(response.data);
				setHasData(true);
			});
	}, []);

	return <div>{hasData && <WeatherInfo weatherData={weatherData} />}</div>;
};

export default Weather;
