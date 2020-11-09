import React from 'react'

const Filter = ({newSearch, handleSearchChange}) => {
    return (
        <form>
        filter shown with
        <input
            value={newSearch}
            onChange={handleSearchChange} />
            <br />
        </form> 
    ) 
}

export default Filter