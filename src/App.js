import React, { useState, useEffect } from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';
import DeleteAlert from './components/DeleteAlert';

const App = () => {

	// State
	const [formData, setFormData] = useState([]);
	const [notesArray, setNotesArray] = useState([]);
	const [editNote, setEditNote] = useState({});
	const [deleteNote, setDeleteNote] = useState(null);
	const [updating, setUpdating] = useState(false);
	const [searchInput, setSearchInput] = useState('');

	// Use effect on render
	useEffect(() => {
		updateFromLocalStorage();
	}, []);

	// Use effect when formData changes
	useEffect(() => {
		updateLocalStorage();
	}, [formData]);

	// Use effect when search input changes
	useEffect(() => {
		searchNotes();
	}, [searchInput]);

	// Save to local storage
	const updateLocalStorage = () => {
		localStorage.setItem('notes', JSON.stringify(formData));
	}

	// Update from local storage
	const updateFromLocalStorage = () => {
		if (localStorage.getItem('notes') === null) {
			localStorage.setItem('notes', JSON.stringify([]));
		} else {
			let notes = JSON.parse(localStorage.getItem('notes'));
			setFormData(notes);
			setNotesArray(notes);
		}
	}

	// Search through notes based on input
	const searchNotes = () => {
		setNotesArray(formData.filter(note => {
			if (note.title.toLowerCase().includes(searchInput.toLowerCase())) {
				return note;
			} else if (note.note.toLowerCase().includes(searchInput.toLowerCase())) {
				return note;
			}
		}))
	}

	return (
		<div className="App">
			{deleteNote !== null ? <DeleteAlert deleteNote={deleteNote} setDeleteNote={setDeleteNote} formData={formData} setFormData={setFormData} /> : null}
			<Form formData={formData} setFormData={setFormData} editNote={editNote} updating={updating} setUpdating={setUpdating} />
			<NoteList formData={searchInput === '' ? formData : notesArray} setFormData={setFormData} setEditNote={setEditNote} setUpdating={setUpdating} searchInput={searchInput} setSearchInput={setSearchInput} setDeleteNote={setDeleteNote} />
		</div>
	);
}

export default App;
