import Head from 'next/head';
import Otsikko from '../../components/Otsikko';
import axios from 'axios';
import Verkkokauppakortti from '../../components/Verkkokauppakortti';
import VerkkokauppaLista from '../../components/VerkkokauppaLista';

export default function verkkokauppa({ langat }) {
	return (
		<div className="kauppa">
			<Head>
				<title>Verkkokauppa</title>
			</Head>
			<Otsikko otsikko={'Verkkokauppa'} />
			<VerkkokauppaLista langat={langat} />
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/langat');
	return {
		props: {
			langat: res.data
		}
	};
};
