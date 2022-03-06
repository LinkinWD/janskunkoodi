import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import ValintaKortti from '../../components/ValintaKortti';
import styled from '../../styles/tuote.module.css';

export default function tuote({ product }) {
	const { title, image, price, malf, info } = product;
	return (
		<section>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={styled.top}>
				<h2 className={styled.title}>{title}</h2>
				<Image src={image} width={400} height={300} alt={title} />

				<p className={styled.malf}>Valmistaja: {malf}</p>
				<h2 className={styled.info}>Tuoteselostus:</h2>
				<div>
					{info.map((rivi, idx) => {
						return (
							<p className={styled.infoparagraph} key={idx}>
								{rivi}
							</p>
						);
					})}
				</div>
			</div>
			<div className={styled.colorarea}>
				{product.selection.map((color, idx) => {
					return <ValintaKortti key={idx} color={color} product={product} />;
				})}
			</div>
		</section>
	);
}
export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(process.env.SERVER_URL + '/api/products/' + params.id);
	return {
		props: {
			product: res.data
		}
	};
};
