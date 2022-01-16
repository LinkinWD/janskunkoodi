import Image from 'next/image';
import styled from '../styles/tuotekortti.module.css';

export default function Tuotekortti({ tuote }) {
	const { nimi, alaluokka, selostus, puikkosuositus, kuva, luokka, valmistaja } = tuote.fields;
	return (
		<article className={styled.card}>
			<h3 className={styled.title}>{nimi}</h3>
			<Image src={`https:${kuva.fields.file.url}`} width={250} height={200} alt="lanka" />
			<p className={styled.luokka}>Luokka: {alaluokka}</p>
			<p>Valmistaja: {valmistaja}</p>
			<p className={styled.selostus}>{selostus}</p>
			{luokka ? <p>Puikkosuositus: {puikkosuositus}</p> : null}
		</article>
	);
}
