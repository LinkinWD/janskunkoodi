import Head from 'next/head';
import Otsikko from '../../components/Otsikko';

import Verkkokauppakortti from '../../components/Verkkokauppakortti';
import VerkkokauppaLista from '../../components/VerkkokauppaLista';

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
