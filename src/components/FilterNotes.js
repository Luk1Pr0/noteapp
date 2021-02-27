import React from 'react';

const FilterNotes = ({ setSearchInput }) => {

	const onChange = (e) => {
		setSearchInput(e.target.value);
	}

	return (
		<div>
			<form className='filter-form'>
				<label>
					<h3>Search Notes</h3>
					<input type="text" placeholder='My note...' onChange={onChange} />
				</label>
			</form>
		</div>
	)
}

export default FilterNotes;
