import Image from 'next/image';
import styled from '../styles/tuotekortti.module.css';

export default function Tuotekortti({ lanka }) {
	const { title, img, description } = lanka;
	return (
		<article className={styled.card}>
			<h3 className={styled.title}>{title}</h3>
			<Image src="/images/tuotteet/lanka.jpg" width={250} height={200} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut repellat rem, cupiditate
				voluptatem doloremque ipsum saepe molestias quo nulla eos ad iusto? Voluptatum sunt vero eos earum,
				ipsum possimus!
			</p>
		</article>
	);
}
