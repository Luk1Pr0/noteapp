import React from 'react';

// Components
import NoteItem from './NoteItem';
import Alert from './Alert';
import FilterNotes from './FilterNotes';

const NoteList = ({ formData, setFormData, setEditNote, setUpdating, searchInput, setSearchInput }) => {
	return (
		<div className='notelist-container'>
			<FilterNotes searchInput={searchInput} setSearchInput={setSearchInput} />
			<ul>
				{!formData.length ?
					<Alert msg='No notes found!' />
					:
					formData.map(data => (
						<NoteItem
							key={data.id}
							title={data.title}
							content={data.note}
							date={data.date}
							id={data.id}
							formData={formData}
							setFormData={setFormData}
							setEditNote={setEditNote}
							setUpdating={setUpdating}
						/>
					))
				}
			</ul>
		</div>
	)
}

export default NoteList;