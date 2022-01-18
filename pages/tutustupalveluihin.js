import Otsikko from '../components/Otsikko';
import Head from 'next/head';
import { palvelutJaTuotteet } from '../data';
import PalvelutJaTuotteet from '../components/PalvelutJaTuotteet';
import styled from '../styles/tutustupalveluihin.module.css';

export default function tutustupalveluihin() {
	return (
		<section className={styled.section}>
			<Head>
				<title>Palvelut ja tuotteet</title>
			</Head>
			<Otsikko otsikko={'Palvelut ja Tuotteet'} />
			<div className={styled.div}>
				{palvelutJaTuotteet.map((data) => {
					return <PalvelutJaTuotteet key={data.id} data={data} />;
				})}
			</div>
		</section>
	);
}
