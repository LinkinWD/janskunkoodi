import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import axios from 'axios';
import styled from '../styles/ostoskori.module.css';

export default function ostoskori() {
	let products = [];
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const temp = cart.products.map((product) => {
		products.push({
			productName: product.productName,
			name: product.name,
			quantity: product.quantity,
			price: product.price
		});
	});
	
	const currency = 'EUR';
	const style = { layout: 'vertical' };
	const postikulut = 8;
	const total = cart.total + postikulut;
	const amount = total;
	const router = useRouter();
	const items = [];
	const createOrder = async (data) => {
		try {
			const res = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL+'/api/orders', data);
		} catch (err) {
			console.log(err);
		}
	};
	const ButtonWrapper = ({ currency, showSpinner }) => {
		// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
		// This is the main reason to wrap the PayPalButtons in a new component
		const [ { options, isPending }, dispatch ] = usePayPalScriptReducer();

		useEffect(
			() => {
				dispatch({
					type: 'resetOptions',
					value: {
						...options,
						currency: currency
					}
				});
			},
			[ currency, showSpinner ]
		);

		return (
			<div>
				{showSpinner && isPending && <div className="spinner" />}
				<PayPalButtons
					style={style}
					disabled={false}
					forceReRender={[ amount, currency, style ]}
					fundingSource={undefined}
					createOrder={(data, actions) => {
						cart.products.map((product) => {
							items.push({
								name: product.name + '-' + product.productName,
								quantity: product.quantity,
								unit_amount: {
									currency_code: currency,
									value: product.price
								}

							});
						});
						
						console.log(items);
						return actions.order
							.create({
								purchase_units: [
									{
										
										amount: {
											currency_code: 'EUR',currency,
											value: amount
										}
									}
								]
							})
							.then((orderId) => {
								// Your code here after create the order
								return orderId;
							});
					}}
					onApprove={function(data, actions) {
						return actions.order.capture().then(function(details) {
							const shipping = details.purchase_units[0].shipping;
							createOrder({
								customer: shipping.name.full_name,
								address: shipping.address.address_line_1,
								city: shipping.address.admin_area_2,
								postal: shipping.address.postal_code,
								total: total,
								products: products
							});
						});
					}}
				/>
			</div>
		);
	};

	return (
		<div>
			<Head>
				<title>Ostoskori</title>
			</Head>
			<Otsikko otsikko={'Ostoskori'} />
			<section className={styled.section}>
				<div className={styled.left}>
					{cart.products.map((cartitem, idx) => {
						return (
							<div key={idx} className={styled.product}>
								<h3>Lanka:{cartitem.productName}</h3>
								<Image
									src={cartitem.image}
									height={80}
									width={100}
									alt={cartitem.name}
								/>
								<p>Väri: {cartitem.name}</p>
								<p>Määrä: {cartitem.quantity}</p>
								<p>Hinta/kpl: {cartitem.price}€</p>
							</div>
						);
					})}
				</div>
				{cart.products.length > 0 && (
					<div className={styled.right}>
						<div>
							<p>Tuotteet yhteensä: {cart.total.toFixed(2)}</p>
							<p>Postikulut: {postikulut}€</p>
							<p>Yhteensä: {total.toFixed(2)} €</p>
						</div>

						<div>
							<PayPalScriptProvider
								options={{
									'client-id':
										'AYbGCfeU-_6XTirA9oOlHTfocyOV776AbnHByBjVUOUEiK5EP1KYWz_dsUSCzyHPdY0R_1YIAB3wHMS4',
									components: 'buttons',
									currency: 'EUR'
								}}
							>
								<ButtonWrapper currency={currency} showSpinner={false} />
							</PayPalScriptProvider>
						</div>
					</div>
				)}
			</section>
		</div>
	);
}
