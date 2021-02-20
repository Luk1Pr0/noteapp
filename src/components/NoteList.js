import React from 'react';

// Components
import NoteItem from './NoteItem';

const NoteList = ({ formData }) => {

	const notes = [
		{
			id: 1,
			title: 'Note 1',
			date: '12/12/2020',
			content: 'Note sample...'
		},
		{
			id: 2,
			title: 'Note 2',
			date: '12/12/2020',
			content: 'Note sample...'
		},
		{
			id: 3,
			title: 'Note 3',
			date: '12/12/2020',
			content: 'Note sample...'
		},
		{
			id: 4,
			title: 'Note 4',
			date: '12/12/2020',
			content: 'Note sample...'
		},
		{
			id: 5,
			date: '12/12/2020',
			title: 'Note 5',
			content: 'Note sample...'
		},
	]

	return (
		<div className='notelist-container'>
			<ul>
				{
					!formData.length ?
						'No notes'
						:
						formData.map(data => (
							<NoteItem title={data.title} content={data.note} date={data.date} />
						))
				}
			</ul>
		</div>
	)
}

export default NoteList;