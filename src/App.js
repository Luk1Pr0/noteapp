import React, { useState } from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';

const App = () => {

	const [formData, setFormData] = useState([]);

	return (
		<div className="App">
			<Form setFormData={setFormData} formData={formData} />
			<NoteList formData={formData} />
		</div>
	);
}

export default App;
