import Head from 'next/head';
import Otsikko from '../../components/Otsikko';
import axios from 'axios';
import Verkkokauppakortti from '../../components/Verkkokauppakortti';
import VerkkokauppaLista from '../../components/VerkkokauppaLista';

export const getStaticProps = async () => {
	const res = await axios.get(`${process.env.SERVER_URL}/api/langat`);
	return {
		props: {
			langat: res.data
		}
	};
};

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
