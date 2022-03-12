import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from '../styles/valintakortti.module.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

export default function ValintaKortti({ product, color }) {
	const [ quantity, setQuantity ] = useState(0);
	const [ totalPrice, setTotalPrice ] = useState(0);

	const [ success, setSuccess ] = useState(false);
	const price = product.price.toFixed(2);
	const productName = product.title;
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (success) {
				setTimeout(() => {
					setSuccess(false);
				}, 2500);
			}
		},
		[ success ]
	);

	const zero = () => {
		setQuantity(0);
		setSuccess(true);
	};

	const add = () => {
		if (quantity < color.stock) {
			setQuantity((quantity += 1));
			setTotalPrice(quantity * price);
		}
	};
	const dec = () => {
		if (quantity > 0) {
			setQuantity((quantity -= 1));
			setTotalPrice(quantity * price);
		}
	};
	const handleClick = () => {
		dispatch(addProduct({ ...color, productName, quantity, price }));
		zero();
	};
	return (
		<div className={styled.colorcard}>
			{success && <span>Tuote lisätty ostoskoriin</span>}
			{color.stock === 0 ? <span>Tuote on tilapäisesti loppu</span> : ''}
			<p className={styled.title}>{color.name}</p>
			<Image src={color.image} height={80} width={100} alt={color.name} />
			<p>Varastossa: {color.stock}</p>
			<p>Hinta: {price} €</p>
			<p>Määrä:</p>
			<div className={styled.amount}>
				<button className={styled.partofamount} onClick={dec}>
					-
				</button>
				<p className={styled.partofamount}>{quantity}</p>
				<button className={styled.partofamount} onClick={add}>
					+
				</button>
			</div>
			<p>Yhteensä:{totalPrice > 0 && <span>{totalPrice.toFixed(2)}€</span>}</p>
			<button onClick={handleClick} className="generalbtn">
				Lisää ostoskoriin
			</button>
		</div>
	);
}
