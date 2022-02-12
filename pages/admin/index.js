import axios from 'axios';
import styled from '../../styles/admin.module.css';
import Image from 'next/image';

export default function index({ langat, tilaukset }) {
	return (
		<div className={styled.container}>
			<section>
				<h2>Tuotteet</h2>
				{langat.map((lanka) => {
					return (
						<div key={lanka._id}>
							<h4>{lanka.title}</h4>
							<h4>{lanka.price}</h4>
							<button>Muuta hintaa</button>
							<button>Poista koko tuote</button>
							<table>
								<thead>
									<tr>
										<th className={styled.th}>Nimi</th>
										<th className={styled.th}>Kuva</th>
										<th className={styled.th}>Varastossa</th>
									</tr>
								</thead>

								<tbody>
									{lanka.supply.map((tuote, index) => {
										return (
											<tr key={index}>
												<td>{tuote.color}</td>
												<td>
													<Image src={tuote.img} width={50} height={50} alt={tuote.color} />
												</td>
												<td>{tuote.stock}</td>
												<td>
													<button>Editoi</button>
												</td>
												<td>
													<button>Poista</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					);
				})}
			</section>
			<section>
				<h2>Tilaukset</h2>
				<table className={styled.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th className={styled.th}>Tilaaja</th>
							<th className={styled.th}>Lähiosoita</th>
							<th className={styled.th}>Postinumero</th>
							<th className={styled.th}>Kaupunki</th>
							<th className={styled.th}>Puhelin</th>
							<th className={styled.th}>Sähköposti</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{'dfdf343455dfds'.slice(0, 4)}...</td>
							<td className={styled.td}>Matti</td>
							<td className={styled.td}>kouvukatu 4</td>
							<td className={styled.td}>30420</td>
							<td className={styled.td}>Forssa</td>
							<td className={styled.td}>050 33345567</td>
							<td className={styled.td}>Matti@gmail.com</td>
							<button>Käsittele</button>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
}

export const getServerSideProps = async () => {
	const langatRes = await axios.get(`${process.env.SERVER_URL}/api/langat`);
	// const tilauksetRes = await axios.get(`${process.env.SERVER_URL}/api/tilaukset`);

	return {
		props: {
			langat: langatRes.data
			//tilaukset: tilauksetRes.data
		}
	};
};
