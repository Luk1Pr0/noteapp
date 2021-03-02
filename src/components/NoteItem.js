import React from 'react';

const NoteItem = ({ date, title, content, id, formData, setEditNote, updating, setUpdating, setDeleteNote, setWarning }) => {

	const splitDate = date.split('T');
	const formattedDate = splitDate[0].split('-').reverse().join('/');
	const formattedTime = splitDate[1].split('.')[0];

	const onClick = (e) => {
		let action = e.target.textContent.toLowerCase();
		if (action === 'edit' && !updating) {
			let filterNote = formData.filter(note => note.id === id);
			setEditNote(filterNote);
			setUpdating(true);
			window.scrollTo(0, 0,);
		} else if (action === 'edit' && updating) {
			setWarning(true);
			setTimeout(() => setWarning(false), 3000);
			window.scrollTo(0, 0,);
		}
		else {
			setDeleteNote({ id });
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