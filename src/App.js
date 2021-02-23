import React, { useState, useEffect } from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';

const App = () => {

	const [formData, setFormData] = useState([]);
	const [editNote, setEditNote] = useState({});
	const [updating, setUpdating] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [filterNotes, setFilterNotes] = useState([]);
	// const [searchNotesArray, setSearchNotesArray] = useState([]);

	useEffect(() => {
		updateFromLocalStorage();
	}, []);

	useEffect(() => {
		updateLocalStorage();
	}, [formData]);

	useEffect(() => {
		searchNotes();
	}, [searchInput]);

	const updateLocalStorage = () => {
		localStorage.setItem('notes', JSON.stringify(formData));
	}

	const updateFromLocalStorage = () => {
		let notes = JSON.parse(localStorage.getItem('notes'));
	}

	const searchNotes = () => {
		console.log(searchInput);
	}

	return (
		<div className="App">
			<Form formData={formData} setFormData={setFormData} editNote={editNote} updating={updating} setUpdating={setUpdating} />
			<NoteList formData={formData} setFormData={setFormData} setEditNote={setEditNote} setUpdating={setUpdating} searchInput={searchInput} setSearchInput={setSearchInput} />
		</div>
	);
}

export default App;
