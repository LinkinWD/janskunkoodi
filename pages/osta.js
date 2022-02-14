import Link from 'next/link';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styled from '../styles/osta.module.css';

import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Osta() {
	const router = useRouter();
	const { success, canceled } = router.query;
	const cart = useSelector((state) => state.cart);
	const data = cart.total;

	useEffect(
		() => {
			// Check to see if this is a redirect back from Checkout
			// const query = new URLSearchParams(window.location.search);
			if (success !== undefined || canceled !== undefined) {
				if (success) {
					console.log('Order placed! You will receive an email confirmation.');
				}

				if (canceled) {
					console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
				}
			}
		},
		[ success, canceled ]
	);

	return (
		<div className={styled.container}>
			<h2 className={styled.header}>Toimitusosoite, sekä tilaajan puhelinnumero ja sähköposti</h2>

			<form action="/api/checkout_sessions" method="POST">
				<label className={styled.label} htmlFor="name">
					Koko nimi
				</label>
				<br />
				<input className={styled.input} type="text" id="name" name="name" />
				<br />
				<label className={styled.label} htmlFor="osoite">
					Lähiosoite
				</label>
				<br />
				<input className={styled.input} type="text" id="osoite" name="osoite" />
				<br />
				<label className={styled.label} htmlFor="posti">
					Postinumero
				</label>
				<br />
				<input className={styled.input} type="text" id="posti" name="posti" />
				<br />
				<label className={styled.label} htmlFor="kaupunki">
					Kaupunki
				</label>
				<br />
				<input className={styled.input} type="text" id="kaupunki" name="kaupunki" />
				<br />
				<label className={styled.label} htmlFor="puhelin">
					Puhelin numero
				</label>
				<br />

				<input className={styled.input} type="text" id="puhelin" name="puhelin" />
				<br />
				<label className={styled.label} htmlFor="email">
					Sähköposti
				</label>
				<br />
				<input className={styled.input} type="text" name="email" id="email" />
				<br />

				<div className={styled.checkwrapper}>
					<label className={styled.label} htmlFor="check">
						Olen lukenut ja hyvksynyt osto ja toimitus ehdot
					</label>
					<input className={styled.check} type="checkbox" name="check" id="check" />
				</div>
				<br />

				<input hidden name="summa" value={data} />

				{data > 0 && (
					<button className="generalbtn" type="submit" role="link">
						Siirry maksamaan
					</button>
				)}
			</form>
			<Link href="/cart">
				<button className="generalbtn">Palaa ostoskoriin</button>
			</Link>
		</div>
	);
}
