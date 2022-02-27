import axios from 'axios';
import styled from '../../styles/tilaussivu.module.css';

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
			<div className={styled.container}>
				<p className={styled.p}>Asiakkaan nimi: {order.customer}</p>
				<p className={styled.p}>Lähiosoite: {order.address}</p>
				<p className={styled.p}>Postinumero: {order.postal}</p>
				<p className={styled.p}>Kaupunki: {order.city}</p>

				<p>Ostetut tuotteet</p>
				{order.products.map((tuote, idx) => {
					return (
						<div key={idx} className={styled.ostetut}>
							<p>Tuote: {tuote.productName}</p>
							<p>Väri: {tuote.name}</p>
							<p>Määrä: {tuote.quantity}/kpl</p>
							<p>Hinta/kpl: {tuote.price.toFixed(2)}€</p>
						</div>
					);
				})}

				<p className={styled.p}>Sisältää postimaksun: 8.10€</p>
				<p className={styled.p}>
					<b>Ostos yhteensä: {order.total.toFixed(2)}€</b>
				</p>
				<button className="generalbtn">Merkitse hoidetuksi ja arkistoi</button>
			</div>
		</div>
	);
}
