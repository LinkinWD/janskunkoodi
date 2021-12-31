import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/palvelutjatuotteet.module.css';

export default function PalvelutJaTuotteet({ data }) {
	const { title, img, link } = data;
	return (
		<Link href={link}>
			<article className={styled.article}>
				<Image src={img} width={350} height={270} alt="palvelutkuva" />
				<div className={styled.title_container}>
					<h3 className={styled.title}>{title}</h3>
				</div>
			</article>
		</Link>
	);
}
