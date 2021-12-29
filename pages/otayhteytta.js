import Head from 'next/head';
import Otsikko from '../components/Otsikko';

export default function otayhteytta() {
	return (
		<div>
			<Head>
				<title>Ota yhteyttä</title>
			</Head>
			<Otsikko otsikko={'Ota yhteyttä'} />
		</div>
	);
}
