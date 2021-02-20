import React from 'react';

const NoteItem = ({ date, title, content }) => {
	return (
		<li>
			<h2>{title}</h2>
			<p>{content}</p>
			<p>{date}</p>
		</li>
	)
}

export default NoteItem;
