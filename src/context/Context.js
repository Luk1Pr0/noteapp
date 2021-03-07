import React, { createContext } from 'react';

export const noteContext = createContext();

export const Context = (props) => {
	return (
		<Context.Provider value={ }>
			{props.children}
		</Context.Provider>
	);
}
