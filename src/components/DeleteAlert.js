import React from 'react';

const DeleteAlert = ({ setDeleteAlert, setConfirmDelete, confirmDelete }) => {

	const onClick = (confirm) => {
		if (confirm === 'delete') {
			setConfirmDelete(true);
		} else {
			setConfirmDelete(false);
		}
		setDeleteAlert(false);
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
