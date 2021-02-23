import React from 'react';

const FilterNotes = ({ filteredNotes, setFilteredNotes }) => {
	return (
		<div>
			<form className='filter-form'>
				{/* <label>
					<input type="radio" name='filter' value='ascending' />
					Ascending
				</label>
				<label>
					<input type="radio" name='filter' value='descending' />
					Descending
				</label> */}
				<label>
					<h3>Search Notes</h3>
					<input type="text" placeholder='My note...' />
				</label>
			</form>
		</div>
	)
}

export default FilterNotes;
