import React from 'react';
import './style/App.css';

// Components
import Form from './components/Form';
import NoteList from './components/NoteList';

const App = () => {
	return (
		<div className="App">
			<Form />
			<NoteList />
		</div>
	);
}

export default App;
