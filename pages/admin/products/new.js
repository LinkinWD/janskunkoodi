import { useGlobalContext } from '../../../context';
import axios from 'axios';
import { useState } from 'react';

export default function uusi() {
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

	const [ infoLine, setInfoLine ] = useState(null);
	const addInfoLine = () => {
		setInfo([ ...info, infoLine ]);
		setInfoLine('');
	};
	const [ selectionName, setSelectionName ] = useState('');
	const [ selectionImg, setSelectionImg ] = useState('');
	const [ selectionStock, setSelectionStock ] = useState(null);

	const addSelection = () => {
		setSelection([ ...selection, { name: selectionName, image: selectionImg, stock: selectionStock } ]);
	};
	const createProduct = async (data) => {
		try {
			const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`, data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<h2>Lisää uusi tuote myyntiin</h2>
			<div>
				<label htmlFor="title">Tuotteen nimi:</label>
				<input type="text" name="title" onChange={(e) => setTitle(e.target.value)} id="title" />
				<br />
				<label htmlFor="image">Kuvan osoite:</label>
				<input type="text" name="image" onChange={(e) => setImage(e.target.value)} id="image" />
				<br />

				<label htmlFor="desc">Kuva teksti:</label>
				<input type="text" name="desc" onChange={(e) => setDesc(e.target.value)} id="desc" />
				<br />
				<label htmlFor="price">Tuotteen Hinta:</label>
				<input type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
				<br />
				<label htmlFor="malf">Tuotteen valmistaja:</label>
				<input type="text" name="malf" onChange={(e) => setMalf(e.target.value)} />
				<br />
				<label htmlFor="info">*Kirjoita rivi tuoteselostusta</label>
				<br />
				<input type="text" name="info" onChange={(e) => setInfoLine(e.target.value)} />
				<br />
				<button onClick={addInfoLine}>Lisää rivi</button>
				<br />
				<label htmlFor="color">Lisää tuotteelle väri myyntiin.</label>
				<br />
				<input
					type="colorname"
					placeholder="Värin nimi/numero"
					name="name"
					onChange={(e) => setSelectionName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Värin kuvan osoite"
					name="img"
					onChange={(e) => setSelectionImg(e.target.value)}
				/>
				<br />
				<input
					type="number"
					placeholder="Montako on varastossa"
					onChange={(e) => setSelectionStock(e.target.value)}
				/>
				<br />
				<button onClick={addSelection}>Lisää väri myyntiin</button>
			</div>
			<div>Tuotteen nimi: {title}</div>
			<div>Tuotteen kuva: {image}</div>
			<div>Tuotteen kuvaus: {desc}</div>
			<div>Tuotteen hinta: {price}€</div>
			<div>Tuotteen valmistaja: {malf}</div>
			<br />
			<p>Tuoteselostus:</p>
			{info.map((rivi, idx) => {
				return <p key={idx}>{rivi}</p>;
			})}
			<p>Myynnissä olevat värit:</p>
			{selection.map((color, idx) => {
				return (
					<div key={idx}>
						<p>{color.name}</p>
						<p>{color.image}</p>
						<p>{color.stock}</p>
					</div>
				);
			})}
			<div>
				<h3>Näyttääkö kaikki hyvältä?</h3>
				<button
					className="generalbtn"
					onClick={() =>
						createProduct({
							title: title,
							image: image,
							desc: desc,
							price: price,
							malf: malf,
							info: info,
							selection: selection
						})}
				>
					Kyllä, lisää tuote
				</button>
			</div>
		</div>
	);
}
