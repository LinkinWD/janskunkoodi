import Link from 'next/link';

export default function Tilaus({ order }) {
	return (
		<Link href={`/admin/${order._id}`}>
			<div>
				<p>Tilaus id:{order._id}</p>
				<p>Tilaajan nimi:{order.customer}</p>
				<p>Tilaajan osoite:{order.address}</p>
			</div>
		</Link>
	);
}
