import Head from 'next/head';
import KumppanitSlider from '../components/KumppanitSlider';
import Otsikko from '../components/Otsikko';

export default function muuttuotteet() {
	return (
		<div>
			<Head>
				<title>Muut tuotteet</title>
			</Head>
			<Otsikko otsikko={'Muut tuotteet'} />
		</div>
	);
}
