import Link from 'next/link';
import axios from 'axios';

export default function index({ productList }) {
	return (
		<div>
			<h2>Tuotteet</h2>
			{productList.map((product) => {
				return (
					<div>
						{product.title}
						<Link href={`/admin/products/${product._id}`}>
							<button>Muokkaa tai poista</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get(process.env.SERVER_URL + '/api/products');
	return {
		props: {
			productList: res.data
		}
	};
};
