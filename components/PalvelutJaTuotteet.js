import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/palvelutjatuotteet.module.css';

export default function PalvelutJaTuotteet({ data }) {
	const { title, img, link, id } = data;
	return (
		<Link href={link}>
			<article className={styled.article}>
				{/* <div className={styled.imagewrapper}>
					<Image src={img} width={350} height={270} alt="palvelutkuva" />
				</div> */}
				<div className={styled.div}>
					<h3 className={styled.title}>{title}</h3>
				</div>
			</article>
		</Link>
	);
}
