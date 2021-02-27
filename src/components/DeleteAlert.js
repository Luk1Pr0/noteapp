import React from 'react';

const DeleteAlert = ({ setDeleteAlert, setConfirmDelete }) => {

	const onClick = () => {

	}

	return (
		<div className='delete-alert'>
			<h1>Are you sure you want to delete this note?</h1>
			<div className="btn-container">
				<button className='btn--red' onClick={onClick}>Yes, delete</button>
				<button className='btn--green' onClick={onClick}>No, don't delete</button>
			</div>
		</div>
	)
}

export default DeleteAlert;
