import Head from 'next/head';
import { useEffect, useState } from 'react';
import Otsikko from '../../components/Otsikko';
import VerkkokauppaLista from '../../components/VerkkokauppaLista';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import styled from '../../styles/verkkokauppa.module.css';
import Ehdot from '../../components/Ehdot';
import { useRouter } from 'next/router';
import axios from 'axios';

export const getServerSideProps = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/api/langat`);
	const data = await res.json();
	return {
		props: {
			langat: data
		}
	};
};

export default function verkkokauppa({ langat }) {
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ modalText, setModalText ] = useState('');
	const [ username, setUsername ] = useState(null);
	const [ password, setPassword ] = useState(null);
	const [ error, setError ] = useState(false);
	const router = useRouter();

	const handleClick = async (e) => {
		try {
			await axios.post('http://localhost:3000/api/login', {
				username,
				password
			});
			router.push('/admin');
		} catch (err) {
			setError(true);
		}
	};

	const handleModal = (text) => {
		setIsModalOpen(!isModalOpen);
		setModalText(text);
	};

	useEffect(() => {
		setIsModalOpen(false);
	}, []);

	return (
		<div className={styled.kauppa}>
			{/* <div className="kauppa"> */}
			<Head>
				<title>Verkkokauppa</title>
			</Head>
			<div className={`${styled.modal} ${isModalOpen && styled.open}`}>
				<div className={styled.iconwrapper}>
					<AiOutlineCloseSquare onClick={() => handleModal()} className={styled.icon} />
				</div>
				<div className={styled.textwrapper}>
					{modalText === 'ehdot' ? (
						<Ehdot />
					) : (
						<div>
							<input
								type="text"
								placeholder="Käyttäjänimi"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Salasana"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button onClick={handleClick}>Kirjaudu</button>
							{error && <span>Väärät tunnukset</span>}
						</div>
					)}
				</div>
			</div>

			<Otsikko otsikko={'Verkkokauppa'} />
			<div className={styled.btnwrapper}>
				<button onClick={() => handleModal('ehdot')} className="generalbtn">
					Osto ja toimitusehdot
				</button>
				<button onClick={() => handleModal('kirjaudu')} className="generalbtn">
					<h3>Admin kirjautuminen</h3>
				</button>
			</div>
			<VerkkokauppaLista langat={langat} />
		</div>
	);
}
