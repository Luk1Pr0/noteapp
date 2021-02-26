import React from 'react';

const DeleteAlert = () => {
	return (
		<div>
			<h1>Are you sure you want to delete this note?</h1>
			<div className="btn-container">
				<button>Yes, delete</button>
				<button>No, don't delete</button>
			</div>
		</div>
	)
}

export default DeleteAlert;
