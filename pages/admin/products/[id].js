import React from 'react';
import axios from 'axios';

export default function product({ product }) {
	return (
		<div>
			<h3>tuote</h3>
			<label htmlFor="title">Tuotteen nimi:</label>
			<input type="text" name="title" id="title" />
			<label htmlFor="image">Kuvan osoite:</label>
			<input type="text" name="image" id="image" />
			<label htmlFor="desc">Kuva teksti:</label>
			<input type="text" name="desc" id="desc" />
			<label htmlFor="price">Hinta:</label>
			<input type="number" name="price" id="price" />
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
