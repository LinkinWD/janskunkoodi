import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
import styled from '../styles/esittelyjapalvelut.module.css';

export default function pesulapalvelut() {
	return (
		<div>
			<Head>
				<title>Pesulapalvelut</title>
			</Head>
			<Otsikko otsikko={'Pesulapalvelut'} />
			<article className={styled.article}>
				<div className={styled.div}>
					<Image src="/images/muut/vista.jpg" width={419} height={279} alt="vistanlogo" />
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Meiltä saat myös pesulapalveluja - voit pesettää lähes kaikki kodin tekstiilit, kutem esim.
					</p>
					<ul>
						<li>Vuodetekstiilit (myös untuvaiset)</li>
						<li>Vuodevaatteet ja päiväpeitteet</li>
						<li>Pöytäliinat ja pyyhkeet, pikkupyykki</li>
						<li>Vesipestävät verhot ja matot</li>
						<li>Takit</li>
					</ul>
					<p className={styled.paragraf}>
						Jätä pestävät tuotteet viimeistään torstaina, niin saat ne perjantaina lähtevään pesulakuormaan.
						Puhtaat voi noutaa viikon kuluttua, matot ja nahkatakit 2-3 viikon kuluttua.
					</p>
					<p className={styled.paragraf}>
						Lisäksi tarjolla on pöytäliinojen ja liinavaatetekstiilien vuokrauspalvelua.
					</p>
					<p className={styled.paragraf}>
						Pesulapalvelut ja tekstiilien vuokrauksen toteuttaa{' '}
						<a className={styled.a} href="http://vistanpesula.fi/">
							Vistan pesula
						</a>
					</p>
				</div>
			</article>
		</div>
	);
}
