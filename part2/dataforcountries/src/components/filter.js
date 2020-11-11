import React from "react";

const Filter = ({ newSearch, handleNewSearch, handleSearch }) => {
	return (
		<form onSubmit={handleSearch}>
			find countries
			<input value={newSearch} onChange={handleNewSearch} />
		</form>
	);
};
export default Filter;
