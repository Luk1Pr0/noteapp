import React from 'react';

// Components
import DeleteAlert from './DeleteAlert';

const NoteItem = ({ date, title, content, id, formData, setFormData, setEditNote, setUpdating, setDeleteAlert }) => {

	const splitDate = date.split('T');
	const formattedDate = splitDate[0].split('-').reverse().join('/');
	const formattedTime = splitDate[1].split('.')[0];

	const onClick = (e) => {
		let action = e.target.textContent.toLowerCase();
		if (action === 'edit') {
			let filterNote = formData.filter(note => note.id === id);
			setEditNote(filterNote);
			setUpdating(true);
		} else {
			// setFormData(formData.filter(note => note.id !== id));
			setDeleteAlert(true);
		}
	}

	return (
		<li>
			<div className="action-container">
				<div className="button__container">
					<button onClick={onClick}>Edit</button>
				</div>
				<div className="button__container">
					<button onClick={onClick}>Delete</button>
				</div>
			</div>
			<h2>{title}</h2>
			<p className='content-container'>{content}</p>
			<p>
				<span className='text--notify'>Created on: </span>
				{formattedDate} <span className='text--notify'>at </span> {formattedTime}
			</p>
		</li>
	)
}

export default NoteItem;
