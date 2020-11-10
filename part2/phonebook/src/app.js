import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/person";
import Filter from "./components/fliter";
import PersonForm from "./components/personForm";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newSearch, setNewSearch] = useState("");

	useEffect(() => {
		console.log("effect");
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise fulfilled");
			setPersons(response.data);
		});
	}, []);
	console.log("render", persons.length, "notes");

	const addPerson = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};

		function duplicate(people) {
			return people.name === newPerson.name;
		}

		if (persons.find(duplicate)) {
			alert(`${newName} is already added to phonebook`);
		} else {
			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
		}
	};

	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
		console.log(newSearch);
		setNewSearch(event.target.value);
	};

	const personsToShow = newSearch
		? persons.filter((person) =>
				person.name.toLowerCase().includes(newSearch.toLowerCase())
		  )
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
			<h2>add a new</h2>
			<PersonForm
				addPerson={addPerson}
				newName={newName}
				newNumber={newNumber}
				handleNewName={handleNewName}
				handleNewNumber={handleNewNumber}
			/>
			<h2>Numbers</h2>
			{personsToShow.map((person) => (
				<Persons key={person.name} person={person} />
			))}
		</div>
	);
};

export default App;
