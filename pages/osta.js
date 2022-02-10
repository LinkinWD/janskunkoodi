import Link from 'next/link';

export default function osta() {
	return (
		<div>
			<h2>Tuotteiden saajan yhteystiedot</h2>
			<form action="">
				<label htmlFor="name">Koko nimi</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="osoite">Lähiosoite</label>
				<input type="text" id="osoite" name="osoite" />
				<label htmlFor="posti">Postinumero</label>
				<input type="text" id="posti" name="posti" />
				<label htmlFor="kaupunki">Kaupunki</label>
				<input type="text" id="kaupunki" name="kaupunki" />
				<label htmlFor="puhelin">Puhelin numero</label>
				<input type="text" id="puhelin" name="puhelin" />
				<label htmlFor="email" />
				<input type="text" name="email" id="email" />
				<label htmlFor="check">Olen lukenut osto toimitus ehdot</label>
				<input type="checkbox" name="check" id="check" />
				<input type="submit" value="kyllä" />
			</form>
			<Link href="/verkkokauppa">
				<button>Palaa verkkokauppaan</button>
			</Link>
		</div>
	);
}
