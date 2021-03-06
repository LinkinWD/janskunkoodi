import { useGlobalContext } from '../../../context';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

export default function product({ product }) {
	useEffect(() => {
		setTitle(product.title);
		setImage(product.image);
		setDesc(product.desc);
		setPrice(product.price);
		setMalf(product.malf);
		setInfo(product.info);
		setSelection(product.selection);
	}, []);
	const [ addText, setAddText ] = useState('');
	const inputRef = useRef();
	const resetInputValue = () => {
		inputRef.current.value = '';
	};

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

	const setNewInfo = (e, index) => {
		let newInfo = [ ...info ];
		newInfo[index] = e.target.value;
		setInfo(newInfo);
	};
	const removeLine = (index) => {
		let newArray = [ ...info ];
		newArray.splice(index, 1);
		setInfo(newArray);
	};
	const addLine = () => {
		setInfo([ ...info, addText ]);
		setAddText('');
		resetInputValue();
	};
	const setNewQuantity = (index, value) => {
		let newSelection = [ ...selection ];
		newSelection[index].stock = value;
		setSelection(newSelection);
	};

	return (
		<div>
			<h3>tuote</h3>
			<label htmlFor="title">Tuotteen nimi:</label>
			<input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
			<label htmlFor="image">Kuvan osoite:</label>
			<input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
			<label htmlFor="desc">Kuva teksti:</label>
			<input type="text" name="desc" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
			<label htmlFor="malf">Valmistaja:</label>
			<input type="text" name="malf" id="malf" value={malf} onChange={(e) => setMalf(e.target.value)} />
			<label htmlFor="price">Hinta:</label>
			<input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

			<div>
				<p>Tuoteselostus:</p>
				{info.map((rivi, idx) => {
					return (
						<div key={idx}>
							<input type="text" value={rivi} onChange={(e) => setNewInfo(e)} />

							<button onClick={() => removeLine(idx)}>Poista rivi</button>
						</div>
					);
				})}
				<p>Lis???? rivi tuoteselostukseen:</p>
				<input type="text" onChange={(e) => setAddText(e.target.value)} ref={inputRef} />

				<button onClick={addLine}>Lis???? rivi</button>
			</div>
			<div>
				<p>Myyniss?? olevat v??rit:</p>
				{selection.map((product, idx) => {
					return (
						<div key={idx}>
							<p>Nimi: {product.name}</p>
							<Image src={product.image} width={80} height={80} alt={product.name} />
							<label htmlFor="stock">M????r?? varastossa</label>
							<input
								type="number"
								value={product.stock}
								name="stock"
								onChange={(e) => setNewQuantity(idx, e.target.value)}
							/>
							<button>Poista v??ri myynnist??</button>
						</div>
					);
				})}
			</div>

			<button>Tallenna muutokset</button>
			<button>Poista tuote</button>
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
