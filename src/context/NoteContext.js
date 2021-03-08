import React, { useState, createContext } from 'react';

export const noteContext = createContext();

export const NoteProvider = (props) => {

	// State
	const [formData, setFormData] = useState([]);
	const [notesArray, setNotesArray] = useState([]);
	const [editNote, setEditNote] = useState({});
	const [deleteNote, setDeleteNote] = useState(null);
	const [updating, setUpdating] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [warning, setWarning] = useState(false);

	return (
		<Context.Provider value={ }>
			{props.children}
		</Context.Provider>
	);
}
