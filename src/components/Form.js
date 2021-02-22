import React, { useState, useEffect } from 'react';

const Form = ({ formData, setFormData, editNote }) => {

	const [input, setInput] = useState({
		id: Math.random(),
		date: new Date().toISOString(),
		title: '',
		note: '',
	});

	useEffect(() => {
		editMode();
	}, [editNote]);

	const onChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
			date: new Date().toISOString(),
			id: Math.random(),
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();
		setFormData([...formData, input]);
		setInput({
			title: '',
			note: '',
		});
	}

	const editMode = () => {
		const note = editNote[0];
		// Remove the edited note so that there are no duplicated
		const updatedFormData = formData.filter(data => data.id !== note.id);
		if (note !== undefined) {
			setInput({ ...note, });
		} else {
			return;
		}
		setFormData(updatedFormData);
	}

	return (
		<div className='form-container'>
			<form onSubmit={onSubmit}>
				<div className="input-container">
					<label>Title</label>
					<input type="text" name='title' onChange={onChange} value={input.title} required placeholder='Learnt react hooks...' />
				</div>
				<div className="input-container">
					<label>Note</label>
					<textarea type="text" name='note' onChange={onChange} value={input.note} required placeholder='Today I have learnt how to create state with react hooks...' />
				</div>
				<div className="form__btn__container">
					<button>Add Note</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
