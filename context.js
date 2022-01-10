import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
	const openSidebar = () => {
		setIsSidebarOpen(true);
		console.log(isSidebarOpen);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
		console.log(isSidebarOpen);
	};
	const hello = 'hello';

	return (
		<AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, openSidebar, closeSidebar, hello }}>
			{children}
		</AppContext.Provider>
	);
};

//custom hook

export const useGlobalContext = () => {
	return useContext(AppContext);
};
