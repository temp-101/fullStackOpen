import React from "react";

const WeatherInfo = ({ weatherData }) => {
	return (
		<div>
			<p>Temp is: {weatherData.current.temperature}</p>
			<img
				alt={"Weather icon"}
				src={weatherData.current.weather_icons[0]}
			></img>
			<p>
				wind: {weatherData.current.wind_speed} direction{" "}
				{weatherData.current.wind_dir}
			</p>
		</div>
	);
};

export default WeatherInfo;
