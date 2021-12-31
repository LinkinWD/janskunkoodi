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
			<article>
				<div>
					<Image src="/images/muut/ompelu.jfif" width={419} height={279} />
				</div>
				<div>
					<p>
						Teen kaikenlaiset korjausompelut ammattitaidolla. Käytössäni on useita ompelukoneita, jotka
						mahdollistavat myös paksumpien kankaiden ompelun, kuten sohvatyynyt. Teen myös korjausompelua.
					</p>
					<p>
						Tyypillisimpiä korjausompelutöitä ovat lahkeiden lyhennykset, vetoketjun vaihdot takkeihin sekä
						housuihin, verhojen ompelut ja lyhennykset sekä erilaiset tilaustyöt.
					</p>
					<p>Esimerkkihintoja</p>
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
