import React, { useState, useEffect } from "react";
import Persons from "./components/person";
import Filter from "./components/fliter";
import PersonForm from "./components/personForm";
import personService from "./services/listOfPersons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [newSearch, setNewSearch] = useState("");

	const getPersons = () => {
		personService.getAll().then((initialPerson) => {
			setPersons(initialPerson);
		});
	};

	useEffect(() => {
		getPersons();
	}, []);

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
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				const person = persons.find((p) => p.name === newPerson.name);
				const updatedPerson = { ...person, number: newPerson.number };
				personService.update(person.id, updatedPerson).then((response) => {
					setPersons(persons.map((p) => (p.id !== person.id ? p : response)));
				});
			}
		} else {
			personService.create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setNewName("");
				setNewNumber("");
			});
		}
	};

	const deletePerson = (id) => {
		if (window.confirm("Are you sure you want to delete this contact?")) {
			personService.deletion(id).then(() => {
				getPersons();
			});
		}
	};

	const handleNewName = (event) => {
		setNewName(event.target.value);
	};

	const handleNewNumber = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
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
				<Persons
					key={person.name}
					person={person}
					deletePerson={deletePerson}
				/>
			))}
		</div>
	);
};

export default App;
