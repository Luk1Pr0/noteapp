import React from 'react';

// Components
import NoteItem from './NoteItem';
import Alert from './Alert';

const NoteList = ({ formData }) => {

	return (
		<div className='notelist-container'>
			<ul>
				{
					!formData.length ?
						<Alert msg='No notes found!' />
						:
						formData.map(data => (
							<NoteItem key={data.id} title={data.title} content={data.note} date={data.date} id={data.id} notes={formData} />
						))
				}
			</ul>
		</div>
	)
}

export default NoteList;