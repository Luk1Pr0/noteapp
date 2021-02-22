import React from 'react';

const NoteItem = ({ date, title, content, id, notes }) => {

	const splitDate = date.split('T');
	const formattedDate = splitDate[0].split('-').reverse().join('/');
	const formattedTime = splitDate[1].split('.')[0];

	const onClick = (e) => {
		let action = e.target.textContent.toLowerCase();
		if (action === 'edit') {
			console.log('edit mode');
		} else {
			console.log('delete mode');
			notes.filter(note => {
				console.log(note);
				console.log(id);
				return note.id === id;
			});
			console.log(notes);
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
