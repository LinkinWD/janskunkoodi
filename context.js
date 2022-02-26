import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

	const [ showProducts, setShowProducts ] = useState('all');
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ whatInModal, setWhatInModal ] = useState('');
	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				setIsSidebarOpen,
				openSidebar,
				closeSidebar,
				showProducts,
				setShowProducts,
				isModalOpen,
				setIsModalOpen,
				openModal,
				closeModal,
				setWhatInModal,
				whatInModal
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

//custom hook

export const useGlobalContext = () => {
	return useContext(AppContext);
};
