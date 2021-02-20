import React, { useState } from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';

const App = () => {

	const [formData, setFormData] = useState({
		id: '',
		date: Date,
		title: '',
		content: ''
	})

	console.log(formData);

	return (
		<div className="App">
			<Form setFormData={setFormData} />
			<NoteList />
		</div>
	);
}

export default App;
