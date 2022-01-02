import Otsikko from '../components/Otsikko';
import Tuotekortti from '../components/Tuotekortti';
import { lankadata } from '../data';
import Head from 'next/head';
import { useState } from 'react';
import MenuBtn from '../components/MenuBtn';

export default function langat() {
	const [ tuotteet, setTuotteet ] = useState('kaikkiTuotteet');
	function getUnique(lankadata, index) {
		const unique = lankadata
			.map((e) => e.itemclass)
			// store the keys of the unique objects
			.map((e, i, final) => final.indexOf(e) === i && i)
			// eliminate the dead keys & store unique objects
			.filter((e) => lankadata[e])
			.map((e) => lankadata[e]);

		return unique;
	}
	let uniqueBtn = getUnique(lankadata, 'id');

	return (
		<section>
			<Head>
				<title>Langat</title>
			</Head>
			<Otsikko otsikko={'Langat'} />
			<div className="btncontainer">
				<button onClick={() => setTuotteet('kaikkiTuotteet')}>Kaikki langat</button>

				{uniqueBtn.map((lanka) => {
					return <MenuBtn key={lanka.id} itemclass={lanka.itemclass} tuote={setTuotteet} />;
				})}
			</div>

			<div className="tuotteet">
				{tuotteet === 'kaikkiTuotteet' &&
					lankadata.map((lanka) => {
						return <Tuotekortti key={lanka.id} lanka={lanka} />;
					})}
				{lankadata.map((lanka) => {
					if (tuotteet === lanka.itemclass) {
						return <Tuotekortti key={lanka.id} lanka={lanka} />;
					}
				})}
			</div>
		</section>
	);
}
