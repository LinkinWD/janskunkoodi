import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';
import { lankadata } from '../data';
import Head from 'next/head';

export default function langat() {
	return (
		<section>
			<Head>
				<title>Langat</title>
			</Head>
			<Otsikko otsikko={'Langat'} />

			<div className="tuotteet">
				{lankadata.map((lanka) => {
					return <Tuotekortti key={lanka.id} lanka={lanka} />;
				})}
			</div>
		</section>
	);
}
