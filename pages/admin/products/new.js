import { useGlobalContext } from '../../../context';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styled from '../../../styles/uusi.module.css';
import Image from 'next/image';

export default function uusi() {
	const [ err, setErr ] = useState(null);
	const [ success, setSuccess ] = useState(false);
	useEffect(
		() => {
			if (success) {
				setTimeout(() => {
					setSuccess(false);
				}, 3000);
			}
		},
		[ success ]
	);
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

	const [ kuva, setKuva ] = useState(false);
	const [ infoLine, setInfoLine ] = useState(null);
	const addInfoLine = () => {
		setInfo([ ...info, infoLine ]);
		setInfoLine('');
		resetInputValue();
	};
	const [ selectionName, setSelectionName ] = useState('');
	const [ selectionImg, setSelectionImg ] = useState('');
	const [ selectionStock, setSelectionStock ] = useState(null);

	const addSelection = () => {
		setSelection([ ...selection, { name: selectionName, image: selectionImg, stock: selectionStock } ]);
	};

	const createProduct = async (data) => {
		if (title === '') {
			setErr('Tuotteella pitää olla nimi!');
			return false;
		}
		if (image === '') {
			setErr('Tuotteella pitää olla kuva!');
			return false;
		}
		if (image.slice(0, 4) !== 'http') {
			setErr('Kuvan pitää sijaita netissä');
			return false;
		}

		if (desc === '') {
			setErr('Tuotteella pitää olla lyhyt selostus!');
			return false;
		}
		if (price === 0 || price === '') {
			setErr('Tuotteen hinnan pitää olla yli 0!');
			return false;
		}
		if (malf === '') {
			setErr('Tuotteella pitää olla valmistaja!');
			return false;
		}
		if (info.length < 1) {
			setErr('Tuotteella pitää olla vjonkinlainen tuote selostus!');
			return false;
		}
		if (selection.length < 1) {
			setErr('Tuotteella pitää olla edes yksi väri myynissä!');
			return false;
		}

		setErr(null);
		try {
			const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`, data);
			setSuccess(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div className={styled.otsikko}>
				<h2>Lisää uusi tuote myyntiin</h2>
				{err && <span className={styled.errcontainer}>{err}</span>}
				{success && <span className={styled.successcontainer}>Tuote lisätty tietokantaa onnistuneesti</span>}
			</div>
			<section className={styled.section}>
				<div className={styled.vasen}>
					<label className={styled.label} htmlFor="title">
						Tuotteen nimi:
					</label>
					<input
						className={styled.input}
						type="text"
						name="title"
						onChange={(e) => setTitle(e.target.value)}
						id="title"
					/>
					<br />
					<label className={styled.label} htmlFor="image">
						Kuvan osoite:
					</label>
					<input
						className={styled.input}
						type="text"
						name="image"
						onChange={(e) => setImage(e.target.value)}
						id="image"
					/>
					<br />
					<button onClick={() => setKuva(true)}>Lisää kuva esikatseluun</button>
					<br />

					<label className={styled.label} htmlFor="desc">
						Kuva teksti:
					</label>
					<input
						className={styled.input}
						type="text"
						name="desc"
						onChange={(e) => setDesc(e.target.value)}
						id="desc"
					/>
					<br />
					<label className={styled.label} htmlFor="price">
						Tuotteen Hinta:
					</label>
					<input
						className={styled.input}
						type="number"
						name="price"
						onChange={(e) => setPrice(e.target.value)}
					/>
					<br />
					<label className={styled.label} htmlFor="malf">
						Tuotteen valmistaja:
					</label>
					<input className={styled.label} type="text" name="malf" onChange={(e) => setMalf(e.target.value)} />
					<br />
					<label className={styled.label} htmlFor="info">
						*Kirjoita rivi tuoteselostusta
					</label>
					<br />
					<input
						className={styled.input}
						type="text"
						name="info"
						onChange={(e) => setInfoLine(e.target.value)}
						ref={inputRef}
					/>
					<br />
					<button className={styled.addbtn} onClick={addInfoLine}>
						Lisää rivi
					</button>
					<br />
					<label className={styled.label} htmlFor="color">
						Lisää tuotteelle väri myyntiin.
					</label>
					<br />
					<input
						className={styled.input}
						type="colorname"
						placeholder="Värin nimi/numero"
						name="name"
						onChange={(e) => setSelectionName(e.target.value)}
					/>
					<br />
					<input
						className={styled.input}
						type="text"
						placeholder="Värin kuvan osoite"
						name="img"
						onChange={(e) => setSelectionImg(e.target.value)}
					/>
					<br />
					<input
						className={styled.input}
						type="number"
						placeholder="Montako on varastossa"
						onChange={(e) => setSelectionStock(e.target.value)}
					/>
					<br />
					<button className={styled.addbtn} onClick={addSelection}>
						Lisää väri myyntiin
					</button>
				</div>
				<div className={styled.oikea}>
					<p>Tuotteen nimi: {title}</p>
					<p>Tuotteen kuvan osoite: {image}</p>
					{kuva && <Image src={image} height={300} width={400} alt="esikatselukuva" />}
					<p>Tuotteen kuvaus: {desc}</p>
					<p>Tuotteen hinta: {price}€</p>
					<p>Tuotteen valmistaja: {malf}</p>
					<br />
					<p>Tuoteselostus:</p>
					{info.map((rivi, idx) => {
						return <p key={idx}>{rivi}</p>;
					})}
					<p>Myynnissä olevat värit:</p>
					{selection.map((color, idx) => {
						return (
							<div key={idx}>
								<p>Nimi:{color.name}</p>
								<Image src={color.image} height={100} width={100} alt={color.name} />
								<p>Varastossa:{color.stock}</p>
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
			</section>
		</div>
	);
}
