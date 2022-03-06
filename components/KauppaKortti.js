import Image from 'next/image';
import styled from '../styles/kauppakortti.module.css';
import Link from 'next/link';

export default function({ product }) {
	const { title, desc, image, price } = product;
	const desimaali = price.toFixed(2);

	return (
		<Link href={`/kauppa/${product._id}`}>
			<article className={styled.kortti}>
				<h2>{title}</h2>
				<Image src={image} height={150} width={200} alt={title} />
				<p>{desc}</p>
				<button className="generalbtn">{desimaali}€</button>
			</article>
		</Link>
	);
}
