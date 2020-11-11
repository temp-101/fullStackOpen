import React from "react";
import Weather from "./weather";

const CountryData = ({ country }) => {
	return (
		<div>
			<h1>{country.name}</h1>
			<br />
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<br />
			<h1>Languages</h1>
			<ul>
				{country.languages.map((lang, index) => (
					<li key={index}>{lang.name}</li>
				))}
			</ul>
			<Weather capital={country.capital} />
		</div>
	);
};

export default CountryData;
