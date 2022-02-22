import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import ValintaKortti from '../../components/ValintaKortti';

export default function tuote({ product }) {
	const { title, image, price, malf, info } = product;
	return (
		<section>
			<Head>
				<title>{title}</title>
			</Head>
			<div>
				<h2>{title}</h2>
				<Image src={'/images' + image + '.jpg'} width={400} height={300} alt={title} />
				<p>Valmistaja: {malf}</p>
				<h5>Tuoteselostus:</h5>
				<div>
					{info.map((rivi, idx) => {
						return <p key={idx}>{rivi}</p>;
					})}
				</div>
			</div>
			<div>
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
