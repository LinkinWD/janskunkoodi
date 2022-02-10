import Head from 'next/head';
import { useEffect, useState } from 'react';
import Otsikko from '../../components/Otsikko';
import VerkkokauppaLista from '../../components/VerkkokauppaLista';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import styled from '../../styles/verkkokauppa.module.css';
import Ehdot from '../../components/ehdot';

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
				<div className={styled.textwrapper}>{modalText === 'ehdot' ? <Ehdot /> : <div>Kirjaudu</div>}</div>
			</div>

			<Otsikko otsikko={'Verkkokauppa'} />
			<div className={styled.btnwrapper}>
				<button onClick={() => handleModal('ehdot')} className={styled.btn}>
					Osto ja toimitusehdot
				</button>
				<button onClick={() => handleModal('kirjaudu')} className={styled.btn}>
					Kirjaudu
				</button>
			</div>
			<VerkkokauppaLista langat={langat} />
		</div>
	);
}
