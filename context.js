import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

	const [ showProducts, setShowProducts ] = useState('all');
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const [ name, setName ] = useState('');
	const [ address, setAdress ] = useState('');
	const [ postalcode, setPostalcode ] = useState('');
	const [ city, setCity ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ orders, setOrders ] = useState([]);
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				setIsSidebarOpen,
				openSidebar,
				closeSidebar,
				showProducts,
				setShowProducts,
				name,
				setName,
				address,
				setAdress,
				postalcode,
				setPostalcode,
				city,
				setCity,
				email,
				setEmail,
				phone,
				setPhone,
				orders,
				setOrders
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
