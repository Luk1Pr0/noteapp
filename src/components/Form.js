import React from 'react';

const Form = () => {
	return (
		<div className='form-container'>
			<form>
				<div className="input-container">
					<label>Title</label>
					<input type="text" name='title' />
				</div>
				<div className="input-container">
					<label>Note</label>
					<textarea type="text" name='note' />
				</div>
				<div className="form__btn__container">
					<button>Add Note</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
