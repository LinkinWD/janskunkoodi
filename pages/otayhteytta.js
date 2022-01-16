import Image from 'next/image';
import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import styled from '../styles/otayhteytta.module.css';

export default function otayhteytta() {
	return (
		<div>
			<Head>
				<title>Tule käymään</title>
			</Head>
			<Otsikko otsikko={'Tule käymään'} />
			<div className={styled.container}>
				<div className="kartta">
					<iframe
						className={styled.iframe}
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.4171661139452!2d23.6216377!3d60.8132051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e9cb607b47fb3%3A0x244c2a68e33e6cf9!2sKauppakatu%202%2C%2030100%20Forssa!5e0!3m2!1sfi!2sfi!4v1642324539164!5m2!1sfi!2sfi"
						allowfullscreen=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
