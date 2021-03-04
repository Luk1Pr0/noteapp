import React, { useState, useEffect } from 'react';

const Form = ({ formData, setFormData, editNote, updating, setUpdating }) => {

	const [input, setInput] = useState({
		id: Math.random(),
		date: new Date().toISOString(),
		title: '',
		note: '',
	});

	useEffect(() => {
		editMode();
	}, [editNote]);

	useEffect(() => {
		warnBeforeRefresh();
	}, [input]);

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
		setUpdating(false);

		// After the form input has been submitted then do not do anything before reloading page
		window.removeEventListener('beforeunload', preventRefresh);
	}

	const editMode = () => {
		const note = editNote[0];
		// Remove the edited note so that there are no duplicates
		const updatedFormData = formData.filter(data => data.id !== note.id);
		if (note !== undefined) {
			setInput({ ...note });
		} else {
			return;
		}
		setFormData(updatedFormData);
	}

	// Stop page from refreshing
	const preventRefresh = (e) => {
		e.preventDefault();
		e.returnValue = '';
	}

	// If input is empty then warn user before they reload the page
	const warnBeforeRefresh = () => {
		if (input.title.length !== 0 || input.note.length !== 0) {
			window.addEventListener('beforeunload', preventRefresh);
		}
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
					<button type='submit'>{updating ? 'Update Note' : 'Add Note'}</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
