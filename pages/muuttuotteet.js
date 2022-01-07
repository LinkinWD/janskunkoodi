import Head from 'next/head';
import { createClient } from 'contentful';
import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_API
	});
	const res = await client.getEntries({ content_type: 'tuote' });

	return {
		props: {
			tuotteet: res.items
		}
	};
}

export default function muuttuotteet({ tuotteet }) {
	return (
		<div>
			<Head>
				<title>Muut tuotteet</title>
			</Head>
			<Otsikko otsikko={'Muut tuotteet'} />
			{tuotteet.map((tuote) => {
				if (tuote.fields.luokka === false) {
					console.log(tuote);
					return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
				}
			})}
		</div>
	);
}
