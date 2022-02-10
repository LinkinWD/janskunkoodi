import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function osta() {
	const router = useRouter();
	const { success, canceled } = router.query;
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
		<div>
			<h2>Toimitusosoite, sekä tilaajan puhelinnumero ja sähköposti</h2>
			<form action="/api/checkout_sessions" method="POST">
				<label htmlFor="name">Koko nimi</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="osoite">Lähiosoite</label>
				<input type="text" id="osoite" name="osoite" />
				<label htmlFor="posti">Postinumero</label>
				<input type="text" id="posti" name="posti" />
				<label htmlFor="kaupunki">Kaupunki</label>
				<input type="text" id="kaupunki" name="kaupunki" />
				<label htmlFor="puhelin">Puhelin numero</label>
				<input type="text" id="puhelin" name="puhelin" />
				<label htmlFor="email" />
				<input type="text" name="email" id="email" />
				<label htmlFor="check">Olen lukenut osto toimitus ehdot</label>
				<input type="checkbox" name="check" id="check" />
				<button type="submit" role="link">
					Siiry maksamaan
				</button>
			</form>
			<Link href="/verkkokauppa">
				<button>Palaa verkkokauppaan</button>
			</Link>
		</div>
	);
}
