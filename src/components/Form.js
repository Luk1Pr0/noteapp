import { getAllByPlaceholderText } from '@testing-library/react';
import React, { useState } from 'react';

const Form = ({ setFormData }) => {
	const [input, setInput] = useState({
		id: 0,
		date: new Date().toISOString(),
		title: '',
		note: '',
	});

	const onChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
			date: new Date().toISOString(),
			id: 5,
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();
		setFormData(input)
		setInput({
			title: '',
			note: '',
		})
	}

	return (
		<div className='form-container'>
			<form onSubmit={onSubmit}>
				<div className="input-container">
					<label>Title</label>
					<input type="text" name='title' onChange={onChange} value={input.title} />
				</div>
				<div className="input-container">
					<label>Note</label>
					<textarea type="text" name='note' onChange={onChange} value={input.note} />
				</div>
				<div className="form__btn__container">
					<button>Add Note</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
