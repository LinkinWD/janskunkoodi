import Head from 'next/head';
import Otsikko from '../components/Otsikko';

export default function ompelupalvelut() {
	return (
		<div>
			<Head>
				<title>Ompelupalvelut</title>
			</Head>
			<Otsikko otsikko={'Ompelupalvelut'} />
		</div>
	);
}
