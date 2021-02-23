import React, { useState, useEffect } from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';

const App = () => {

	const [formData, setFormData] = useState([]);
	const [editNote, setEditNote] = useState({});
	const [updating, setUpdating] = useState(false);

	useEffect(() => {
		updateFromLocalStorage();
	}, []);

	useEffect(() => {
		updateLocalStorage();
	}, [formData]);

	const updateLocalStorage = () => {
		localStorage.setItem('notes', JSON.stringify(formData));
	}

	const updateFromLocalStorage = () => {
		let notes = JSON.parse(localStorage.getItem('notes'));
		setFormData(notes);
	}

	return (
		<div className="App">
			<Form formData={formData} setFormData={setFormData} editNote={editNote} updating={updating} setUpdating={setUpdating} />
			<NoteList formData={formData} setFormData={setFormData} setEditNote={setEditNote} setUpdating={setUpdating} />
		</div>
	);
}

export default App;
