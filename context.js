import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

	const [ showProducts, setShowProducts ] = useState('all');
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ whatInModal, setWhatInModal ] = useState('');
	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);

	const openModal = (text) => {
		setWhatInModal(text);
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setWhatInModal('');
		setIsModalOpen(false);
	};

	//create Product muuttujat
	const [ title, setTitle ] = useState('');
	const [ image, setImage ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ malf, setMalf ] = useState('');
	const [ info, setInfo ] = useState([]);
	const [ selection, setSelection ] = useState([]);

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
				whatInModal,
				title,
				setTitle,
				image,
				setImage,
				desc,
				setDesc,
				price,
				setPrice,
				malf,
				setMalf,
				info,
				setInfo,
				selection,
				setSelection
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
