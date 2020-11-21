import React from "react";

const Persons = ({ person, deletePerson }) => {
	return (
		<>
			<p>
				{person.name} {person.number}{" "}
				<button type="button" onClick={() => deletePerson(person.id)}>
					delete
				</button>
			</p>
		</>
	);
};

export default Persons;
