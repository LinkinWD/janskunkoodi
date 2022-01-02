import Image from 'next/image';
import styled from '../styles/tuotekortti.module.css';

export default function Tuotekortti({ lanka }) {
	const { title, img, description, itemclass } = lanka;
	return (
		<article className={styled.card}>
			<h3 className={styled.title}>{title}</h3>
			<Image src="/images/tuotteet/lanka.jpg" width={250} height={200} />
			<p>Luokka: {itemclass}</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut repellat rem, cupiditate</p>
		</article>
	);
}
