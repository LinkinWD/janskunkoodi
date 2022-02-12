import styled from '../styles/kauppakortti.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

export default function KauppaKortti({ tuote, hinta }) {
	const [ totalPrice, setTotalPrice ] = useState(0);
	const dispatch = useDispatch();
	const [ quantity, setQuantity ] = useState(0);
	const handleChance = (e) => {
		let arvo = e.target.value;
		setTotalPrice(arvo * hinta);
		setQuantity(arvo);
	};
	const handleClick = (e) => {
		e.preventDefault();
		if (quantity === 0) {
			return;
		}
		dispatch(addProduct({ ...tuote, hinta, quantity }));
	};

	return (
		<div className={styled.container}>
			<form action="" className={styled.form}>
				<label>{tuote.color}</label>
				<Image src={tuote.img} width={50} height={50} alt={tuote.color} />
				<label htmlFor="number">Kpl</label>
				<input
					type="number"
					name="number"
					id="number"
					max={tuote.stock}
					min="0"
					defaultValue="0"
					className={styled.input}
					onChange={(e) => handleChance(e)}
				/>
				<p>Hinta:{totalPrice}€</p>

				<button onClick={handleClick} type="submit">
					Lisää ostoskoriin
				</button>
			</form>
		</div>
	);
}
