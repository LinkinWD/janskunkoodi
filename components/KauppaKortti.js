import styled from '../styles/kauppakortti.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function KauppaKortti({ tuote, hinta }) {
	const [ totalPrice, setTotalPrice ] = useState(0);

	const handleChance = (e) => {
		let arvo = e.target.value;
		setTotalPrice(arvo * hinta);
	};

	return (
		<div className={styled.container}>
			<form action="" className={styled.form}>
				<label>{tuote.color}</label>
				<label htmlFor="number">Määrä</label>
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
				<p>Yhteensä:{totalPrice}€</p>
				<Image src={tuote.img} width={50} height={50} alt={tuote.color} />
				<button type="submit">Lisää ostoskoriin</button>
			</form>
		</div>
	);
}
