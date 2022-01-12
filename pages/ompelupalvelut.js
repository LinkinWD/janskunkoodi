import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
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
					<Image src="/images/muut/ompelu.jfif" width={419} height={279} alt="ompelukuva" />
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Teen kaikenlaiset korjausompelut ammattitaidolla. Käytössäni on useita ompelukoneita, jotka
						mahdollistavat myös paksumpien kankaiden ompelun, kuten sohvatyynyt. Teen myös korjausompelua.
					</p>
					<p className={styled.paragraf}>
						Tyypillisimpiä korjausompelutöitä ovat lahkeiden lyhennykset, vetoketjun vaihdot takkeihin sekä
						housuihin, verhojen ompelut ja lyhennykset sekä erilaiset tilaustyöt.
					</p>
					<p className={styled.paragraf}>Esimerkkihintoja</p>
					<ul>
						<li>
							<p>lahkeiden lyhennykset alkaen 12 €</p>
						</li>
						<li>
							<p>vetoketjun vaihto alkaen 25 €</p>
						</li>
						<li>
							<p>verhojen lyhennykset alkaen 12 € /verho</p>
						</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
