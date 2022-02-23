import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
import { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

import styled from '../styles/ostoskori.module.css';

export default function ostoskori() {
	const amount = '2';
	const currency = 'EUR';
	const style = { layout: 'vertical' };

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
						return actions.order
							.create({
								purchase_units: [
									{
										amount: {
											currency_code: currency,
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
						return actions.order.capture().then(function() {
							// Your code here after capture the order
						});
					}}
				/>
			</div>
		);
	};

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const postikulut = 8;
	const total = cart.total + postikulut;
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
									src={'/images' + cartitem.image + '.jpg'}
									height={80}
									width={100}
									alt={cartitem.name}
								/>
								<p>Väri: {cartitem.name}</p>
								<p>Määrä: {cartitem.quantity}</p>
								<p>Hinta yhteensä: {cartitem.price}€</p>
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
										'AYaSjPyWTAW3Y4GU5O-j5wDpU60Scn-F0sedEk64BpjHeH6ci2srhQgYQ-U-OxmHZhaiBPQIs-cOoH1l',
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
