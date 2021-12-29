import Head from 'next/head';
import Otsikko from '../components/Otsikko';

export default function pesulapalvelut() {
	return (
		<div>
			<Head>
				<title>Pesulapalvelut</title>
			</Head>
			<Otsikko otsikko={'Pesulapalvelut'} />
		</div>
	);
}
