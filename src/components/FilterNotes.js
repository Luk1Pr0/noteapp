import React from 'react';

const FilterNotes = ({ setSearchInput }) => {

	const onChange = (e) => {
		setSearchInput(e.target.value);
	}

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
					<input type="text" placeholder='My note...' onChange={onChange} />
				</label>
			</form>
		</div>
	)
}

export default FilterNotes;
