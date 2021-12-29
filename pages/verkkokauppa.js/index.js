import Head from 'next/head';
import Otsikko from '../../components/Otsikko';

export default function verkkokauppa() {
	return (
		<div className="kauppa">
			<Head>
				<title>Verkkokauppa</title>
			</Head>
			<Otsikko otsikko={'Verkkokauppa'} />
		</div>
	);
}
