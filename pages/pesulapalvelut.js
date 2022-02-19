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
					<Image src="/images/muut/vistakuva.png" width={619} height={529} alt="vistanlogo" />
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Meiltä saat myös pesulapalveluja - voit pesettää lähes kaikki kodin tekstiilit, kutem esim.
					</p>
					<ul>
						<li className={styled.li}>Vuodetekstiilit (myös untuvaiset)</li>
						<li className={styled.li}>Vuodevaatteet ja päiväpeitteet</li>
						<li className={styled.li}>Pöytäliinat ja pyyhkeet, pikkupyykki</li>
						<li className={styled.li}>Vesipestävät verhot ja matot</li>
						<li className={styled.li}>Takit</li>
					</ul>
					<p className={styled.paragraf}>
						Jätä tuotteet viimeistään maanantana, niin saat ne seuraavana tiistaina lähtevään
						pesulakuormaan. Puhtaat voi noutaa viikon kuluttua, matot ja nahkatakit 2-3 viikon kuluttua.
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
