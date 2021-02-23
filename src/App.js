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

	// Use effect on render
	useEffect(() => {
		updateFromLocalStorage();
	}, []);

	// Use effect when formData changes
	useEffect(() => {
		updateLocalStorage();
		setFilterNotes(formData);

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
		let notes = JSON.parse(localStorage.getItem('notes'));
		setFormData(notes);
	}

	// Search through notes
	const searchNotes = () => {
		if (filterNotes.length) {
			if (searchInput === '') {
				setFilterNotes(formData);
			} else {
				setFilterNotes(filterNotes.filter(note => {
					return note.title.toLowerCase().includes(searchInput.toLowerCase())
				}));
				setFilterNotes(filterNotes.filter(note => {
					return note.note.toLowerCase().includes(searchInput.toLowerCase())
				}));
			}
		} else {
			return;
		}
	}

	return (
		<div className="App">
			<Form formData={formData} setFormData={setFormData} editNote={editNote} updating={updating} setUpdating={setUpdating} />
			<NoteList formData={filterNotes} setFormData={setFormData} setEditNote={setEditNote} setUpdating={setUpdating} searchInput={searchInput} setSearchInput={setSearchInput} />
		</div>
	);
}

export default App;
