import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/filter";
import ListOfCountires from "./components/listOfCountries";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [newSearch, setNewSearch] = useState("");
	const [showCountry, setShowCountry] = useState();

	useEffect(() => {
		axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	const handleNewSearch = (event) => {
		setNewSearch(event.target.value);
		setShowCountry();
	};

	const countriesToShow = newSearch
		? countries.filter((country) =>
				country.name.toLowerCase().includes(newSearch.toLowerCase())
		  )
		: countries;

	return (
		<div>
			<Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
			<ListOfCountires
				countriesToShow={countriesToShow}
				setNewSearch={setNewSearch}
				showCountry={showCountry}
				setShowCountry={setShowCountry}
			/>
		</div>
	);
};

export default App;
