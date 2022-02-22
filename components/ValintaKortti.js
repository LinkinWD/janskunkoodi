import { useState } from 'react';
import Image from 'next/image';

export default function ValintaKortti({ product, color }) {
	const { price } = product;
	const [ quantity, setQuantity ] = useState(0);
	const { totalPrice, setTotalPrice } = useState(0);

	const add = () => {
		if (quantity < color.stock) {
			setQuantity(quantity + 1);
		}
	};
	const dec = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div>
			<p>{color.name}</p>
			<Image src={'/images' + color.image + '.jpg'} height={80} width={100} alt={color.name} />
			<p>Varastossa: {color.stock}</p>
			<button onClick={add}>+</button>
			<p>{quantity}</p>
			<button onClick={dec}>-</button>
			<p>Hinta: {totalPrice}</p>
			<button className="generalbtn">Lisää ostoskoriin</button>
		</div>
	);
}
