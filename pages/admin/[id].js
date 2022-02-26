import axios from 'axios';

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(process.env.SERVER_URL + '/api/orders/' + params.id);
	return {
		props: {
			order: res.data
		}
	};
};

export default function tilaus({ order }) {
	return (
		<div>
			<div>
				<p>{order.customer}</p>
				<p>{order.address}</p>
				<p>{order.postal}</p>
				<p>{order.city}</p>
				<p>{order.total}</p>
				{order.products.map((tuote, idx) => {
					return (
						<div key={idx}>
							<p>{tuote.productName}</p>
							<p>{tuote.name}</p>
							<p>{tuote.quantity}</p>
							<p>{tuote.price}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
