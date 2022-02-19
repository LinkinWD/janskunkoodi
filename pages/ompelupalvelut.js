import Head from 'next/head';
import Otsikko from '../components/Otsikko';

import styled from '../styles/esittelyjapalvelut.module.css';

export default function ompelupalvelut() {
	return (
		<div>
			<Head>
				<title>Ompelupalvelut</title>
			</Head>
			<Otsikko otsikko={'Ompelupalvelut'} />
			<article className={styled.article}>
				<div className={styled.div}>
					<video autoPlay loop style={{ width: '500px', height: '450px' }}>
						<source src="/images/muut/video.mp4" type="video/mp4" />
					</video>
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Teen kaikenlaiset korjausompelut ammattitaidolla. Käytössäni on useita ompelukoneita, jotka
						mahdollistavat myös paksumpien kankaiden ompelun, kuten sohvatyynyt. Teen myös alihankinta
						ompelua.
					</p>
					<p className={styled.paragraf}>
						Tyypillisimpiä korjausompelutöitä ovat lahkeiden lyhennykset, vetoketjun vaihdot takkeihin sekä
						housuihin, verhojen ompelut ja lyhennykset sekä erilaiset tilaustyöt.
					</p>
					<p className={styled.paragraf}>Esimerkkihintoja</p>
					<ul>
						<li className={styled.li}>Lahkeiden lyhennykset alkaen 12 €</li>
						<li className={styled.li}>Vetoketjun vaihto alkaen 25 €</li>
						<li className={styled.li}>Verhojen lyhennykset alkaen 12 € /verho</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
