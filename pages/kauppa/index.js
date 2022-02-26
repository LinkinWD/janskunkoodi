import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useGlobalContext } from '../../context';
import KauppaKortti from '../../components/KauppaKortti';
import Otsikko from '../../components/Otsikko';
import Modal from '../../components/Modal';
import styled from '../../styles/kauppa.module.css';

export default function index({ productList }) {
	const { isModalOpen, setIsModalOpen, openModal, setWhatInModal } = useGlobalContext();
	const handleClick = (text) => {
		setWhatInModal(text);
		setIsModalOpen(true);
	};
	return (
		<div className={styled.div}>
			<Head>
				<title>Verkkokauppa</title>
			</Head>
			{isModalOpen ? <Modal className={styled.modalopen} /> : <Modal className={styled.modalclosed} />}
			<Otsikko otsikko={'Verkkokauppa'} />
			<div className={styled.btnarea}>
				<Link href="/admin">
					<a className="generalbtn">Hallinoi tilauksia ja tuotteita</a>
				</Link>
				<button onClick={() => handleClick('maksu')} className="generalbtn">
					Maksu- ja toimitusehdot
				</button>
				<button onClick={() => handleClick('kirjaudu')} className="generalbtn">
					Kirjaudu
				</button>
			</div>
			<section className={styled.wrapper}>
				{productList.map((product) => {
					return <KauppaKortti key={product._id} product={product} />;
				})}
			</section>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get(process.env.SERVER_URL + '/api/products');
	return {
		props: {
			productList: res.data
		}
	};
};
