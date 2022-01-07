import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';
import { createClient } from 'contentful';
import Head from 'next/head';

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

export default function langat({ tuotteet }) {
	return (
		<section>
			<Head>
				<title>Langat</title>
			</Head>
			<Otsikko otsikko={'Langat'} />
			{tuotteet.map((tuote) => {
				if (tuote.fields.luokka === true) {
					return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
				}
			})}
		</section>
	);
}
