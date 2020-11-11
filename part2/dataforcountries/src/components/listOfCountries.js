import React from "react";
import CountryData from "./countryData";

const ListOfCountries = ({
	countriesToShow,
	setNewSearch,
	showCountry,
	setShowCountry,
}) => {
	const handleButtonClick = (event) => {
		const newShowCountry = countriesToShow.filter((country) =>
			country.name.includes(event.target.value)
		);
		setShowCountry(newShowCountry[0]);
	};
	if (showCountry === undefined) {
		if (countriesToShow.length === 1) {
			return <CountryData country={countriesToShow[0]} />;
		} else if (countriesToShow.length <= 10 && countriesToShow !== 1) {
			return (
				<>
					{countriesToShow.map((country, index) => (
						<p key={index}>
							{country.name}
							<button
								key={Math.random()}
								value={country.name}
								onClick={handleButtonClick}
							>
								Show
							</button>
						</p>
					))}
				</>
			);
		} else {
			return (
				<>
					<p>Too many matches, specify another filter</p>
				</>
			);
		}
	} else {
		const count = showCountry;
		return <CountryData country={count} />;
	}
};
export default ListOfCountries;
