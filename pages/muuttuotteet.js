import Head from 'next/head';
import { useState } from 'react';
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
	const [ uniikiLuokka, setUniikiLuokka ] = useState([]);
	console.log(uniikiLuokka);
	return (
		<div>
			<Head>
				<title>Muut tuotteet</title>
			</Head>
			<Otsikko otsikko={'Muut tuotteet'} />
			<div>
				<button>Järjestele luokkia</button>
				{tuotteet.map((tuote) => {
					if (tuote.fields.luokka === false && uniikiLuokka.indexOf(tuote.fields.alaluokka) === -1) {
						setUniikiLuokka((aiemmat) => [ ...aiemmat, tuote.fields.alaluokka ]);
					}
				})}
			</div>
			<div>
				{tuotteet.map((tuote) => {
					if (tuote.fields.luokka === false) {
						return <Tuotekortti key={tuote.sys.id} tuote={tuote} />;
					}
				})}
			</div>
		</div>
	);
}
