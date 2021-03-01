import React from 'react';

const DeleteAlert = ({ deleteNote, setDeleteNote, formData, setFormData }) => {

	const onClick = (confirm) => {
		if (confirm === 'delete') {
			setFormData(formData.filter(note => note.id !== deleteNote.id));
		}
		setDeleteNote(null);
	}

	return (
		<div className='delete-alert'>
			<h1>Are you sure you want to delete this note?</h1>
			<div className="btn-container">
				<button className='btn--red' onClick={() => onClick('delete')}>Yes, delete</button>
				<button className='btn--green' onClick={() => onClick('cancel')}>No, don't delete</button>
			</div>
		</div>
	)
}

export default DeleteAlert;
