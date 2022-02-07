import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styled from '../styles/cart.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const [ totalPrice, setTotalPrice ] = useState(0);

	const laskeHinta = (quantity, hinta) => setTotalPrice(hinta * quantity + totalPrice);
	return (
		<div className={styled.container}>
			<h2>Ostoskorisi</h2>
			<div className={styled.vasen}>
				<table className={styled.table}>
					<thead>
						<tr>
							<th className={styled.th}>Kuva</th>
							<th className={styled.th}>Nimi</th>
							<th className={styled.th}>Kappalemäärä</th>
							<th className={styled.th}>Hinta yhteensä</th>
							<th className={styled.th} />
						</tr>
					</thead>
					<tbody>
						{cart.products.map((product) => {
							return (
								<tr key={product._id}>
									<td className={styled.td}>
										<Image src={product.img} width={100} height={100} alt={product.color} />
									</td>
									<td className={styled.td}>{product.color}</td>
									<td className={styled.td}>{product.quantity}</td>
									<td className={styled.td}>{product.hinta * product.quantity}</td>
									<td className={styled.td}>
										<button>poista</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className={styled.oikea}>
				<h3>Ostosten hinta yhteensä: {cart.total} €</h3>
				<button>Osta</button>
			</div>
			<Link href="/verkkokauppa">
				<button>Pataa verkkokauppaan</button>
			</Link>
		</div>
	);
}
