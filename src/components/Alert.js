import React from 'react';

const Alert = ({ msg }) => {
	return (
		<div className='alert alert--warning'>
			<h2>{msg}</h2>
		</div>
	)
}

export default Alert;
