import React, { useState } from 'react';

const Form = () => {
	const [input, setInput] = useState({
		title: '',
		note: '',
	});

	const onChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<div className='form-container'>
			<form>
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
