import { useGlobalContext } from '../../../context';
import axios from 'axios';
import { useEffect } from 'react';

export default function product({ product }) {
	useEffect(() => {
		setTitle(product.title);
		setImage(product.image);
		setDesc(product.desc);
		setPrice(product.price);
		setMalf(product.malf);
	}, []);
	const {
		title,
		setTitle,
		image,
		setImage,
		desc,
		setDesc,
		price,
		setPrice,
		malf,
		setMalf,
		info,
		setInfo,
		selection,
		setSelection
	} = useGlobalContext();

	return (
		<div>
			<h3>tuote</h3>
			<label htmlFor="title">Tuotteen nimi:</label>
			<input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
			<label htmlFor="image">Kuvan osoite:</label>
			<input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
			<label htmlFor="desc">Kuva teksti:</label>
			<input type="text" name="desc" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
			<label htmlFor="price">Hinta:</label>
			<input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
			<label htmlFor="malf">Merkki:</label>
			<input type="text" name="malf" id="malf" />

			<button>edit</button>
			<button>delete</button>
		</div>
	);
}
export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(process.env.SERVER_URL + '/api/products/' + params.id);
	return {
		props: {
			product: res.data
		}
	};
};
