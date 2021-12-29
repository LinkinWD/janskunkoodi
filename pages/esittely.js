import Head from 'next/head';
import Otsikko from '../components/Otsikko';

export default function esittely() {
	return (
		<div>
			<Head>
				<title>Esittely</title>
			</Head>
			<Otsikko otsikko={'Esittely'} />
		</div>
	);
}
