import Image from 'next/image';
import styled from '../styles/tuotekortti.module.css';

export default function Tuotekortti({ tuote }) {
	const { nimi, alaluokka, selostus, puikkosuositu } = tuote.fields;
	return (
		<article className={styled.card}>
			<h3 className={styled.title}>{nimi}</h3>
			<Image src="/images/tuotteet/lanka.jpg" width={250} height={200} />
			<p>Luokka: {alaluokka}</p>
			<p>{selostus}</p>
		</article>
	);
}
