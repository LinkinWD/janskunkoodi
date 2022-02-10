const stripe = require('stripe')(
	sk_test_51KQXSgCySnwVAZQKd12pe0pVojMHsiAPItn2HeGNTC82EFzIWW6RXPJGQv2pY7qX8g6a2omH5QacV4TPqFyix4BM005cW2KfOk
);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
						price_data: {
							currency: 'eur',
							product_data: {
								name: 'Joku lanka vaan'
							},
							unit_amount: 6.9 * 100
						},
						quantity: 1
					}
				],
				payment_method_types: [ 'card' ],
				mode: 'payment',
				success_url: `${process.env.SERVER_URL}/verkkokauppa/success`,
				cancel_url: `${process.env.SERVER_URL}/verkkokauppa/canceled`
			});
			res.redirect(303, session.url);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
