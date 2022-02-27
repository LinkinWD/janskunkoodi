import Link from 'next/link';

import styled from '../styles/tilauskortti.module.css';

export default function Tilaus({ order }) {
	return (
		<Link href={`/admin/${order._id}`}>
			<div className={styled.container}>
				<p>Tilaus id:{order._id}</p>
				<p>Tilaajan nimi:{order.customer}</p>
				<p>Tilaajan osoite:{order.address}</p>
			</div>
		</Link>
	);
}
